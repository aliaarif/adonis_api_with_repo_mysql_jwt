'use strict'

const userRepo = use('App/Repositories/UserRepository')
const BaseController = use('BaseController')
const User = use('App/Models/Sql/User')
const Database = use('Database')

class TestController extends BaseController {

    index(request, response) {
        // const user = User.find(1)
        // const user = User.query().preload('profile')


        return Database
            .table('users')
            .where('username', 'administrator')
            .first()



        // return users
        // return Database
        //     .table('users')
        //     .where('username', 'administrator')
        //     .first()

    }
}

module.exports = TestController
