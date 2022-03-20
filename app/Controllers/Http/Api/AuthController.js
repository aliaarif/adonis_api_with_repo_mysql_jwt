'use strict'

const userRepo = use('App/Repositories/UserRepository')
const BaseController = use('BaseController')
const User = use('App/Models/Sql/User')
const Hash = use('Hash')

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

            console.log(userExists)

            if (userExists) {
                return response.status(400).send({
                    status: 'error',
                    message: 'User already registered'
                })
            }

            const user = await User.create(request.only(['name', 'email', 'username', 'password']))
            return response.ok(user)

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

}

module.exports = AuthController
