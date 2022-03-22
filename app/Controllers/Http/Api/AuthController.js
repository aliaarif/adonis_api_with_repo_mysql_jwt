'use strict'

const userRepo = use('App/Repositories/UserRepository')
const BaseController = use('BaseController')
// import { HttpContextContract } from "@ioc:Adonis/Core/Context"
// import { schema, rules } from "@ioc:Adonis/Core/Validator"
const User = use('App/Models/Sql/User')
const Profile = use('App/Models/Sql/Profile')
const Hash = use('Hash')
const Mail = use('Mail')

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



    async register({ request, response }) {
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

            // const sentVerifyEmail = await Mail.send('emails.welcome', {
            //     name: "Ali"
            // }, (message) => {
            //     message.from('app@example.com')
            //     message.to(user.email)
            // })

            const sentVerifyEmail = await Mail.send('emails.welcome', user.toJSON(), (message) => {
                message
                    .to(user.email)
                    .from('account@example.com')
                    .subject('Welcome to Adonis 4.1 API')
            })


            return response.status(201).json({
                status: 'ok',
                message: 'User is registered',
                success: user,
                UserID: user['id'],
                sentVerifyEmail: sentVerifyEmail
            })



            // return response.ok(user)

            // let user = new User()
            // user.name = name
            // user.email = email
            // user.username = username
            // user.password = password
            // let success = await user.save()

            // return response.status(201).json({
            //     status: 'ok',
            //     message: 'User is registered',
            //     success: user,
            //     UserID: user['id']
            // })
        } catch (error) {
            console.log(error.message)
            response.status(403).json({
                status: 'error',
                debug_error: error.message,
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

}

module.exports = AuthController
