'use strict'

const userRepo = use('App/Repositories/UserRepository')
const BaseController = use('BaseController')
// import { HttpContextContract } from "@ioc:Adonis/Core/Context"
// import { schema, rules } from "@ioc:Adonis/Core/Validator"
const User = use('App/Models/Sql/User')
const Profile = use('App/Models/Sql/Profile')
const Hash = use('Hash')
const Mail = use('Mail')
const Env = use('Env')

class AuthController extends BaseController {

    async login({ request, response, auth }) {
        try {
            const { email, password } = request.only(['email', 'password'])
            const token = await auth.attempt(email, password)

            // return response.ok(token)

            return response.status(200).json({
                status: 'ok',
                message: 'User is logged in',
                success: true,
                token: token
            })

        } catch (error) {
            return response.status(400).send({
                status: 'error',
                message: error
            })
        }
    }



    async register({ request, response, session }) {
        try {
            const name = request.input("name")
            const email = request.input("email")
            const username = request.input("username")
            const password = request.input("password")

            const userData = {
                'name': name,
                'email': email,
                'username': username,
                'password': password
            }

            const userExists = await User.findBy('email', email)

            if (userExists) {
                return response.status(400).send({
                    status: 'error',
                    message: 'User already registered'
                })
            }

            const user = await User.create(request.only(['name', 'email', 'username', 'password']))


            const profile = new Profile()
            profile.user_id = user.id
            profile.country = 91
            user.profile().save(profile)

            const registerAs = request.input("register_as")

            registerAs === 'vendor' ? user.roles().attach([3]) : user.roles().attach([4])

            //const hostname = request.hostname()

            user.sendVerificationEmail(session)


            return response.status(201).json({
                status: 'ok',
                message: 'User is registered',
                success: user,
                UserID: user['id']
            })
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                debug_error: error.message,
            })
        }
    }

    async verifyEmail({ response, session, auth }) {
        try {

            //const hostname = request.hostname()

            auth.user.sendVerificationEmail(session)

            return response.status(201).json({
                status: 'ok',
                message: 'User is registered',
                success: auth.user,
                UserID: auth.user['id']
            })

        } catch (error) {
            return response.status(400).send({
                status: 'error',
                message: error
            })
        }
    }


    async logout({ response, auth }) {
        try {
            let logout = await auth.logout()
            return response.status(200).send({
                status: 'success',
                message: logout
            })
        } catch (error) {
            return response.status(400).send({
                status: 'error',
                message: error
            })
        }
    }


    confirmEmail({ response, params, session }) {
        const userid = params.userid
        const tokenFromEmail = params.token
        const tokenFromSession = session.get(`token-${userid}`)

        const user = User.findOrFail(userid)

        if (tokenFromSession === tokenFromEmail) {
            // user.verified_at = new Date()
            // user.save()
            return response.status(200).send({
                status: 'success',
                message: 'Go to dashboard'
            })
        }
        return response.status(422).send({
            status: 'success',
            message: 'Unauthorized'
        })
    }
}

module.exports = AuthController
