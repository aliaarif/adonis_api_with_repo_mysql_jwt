'use strict'

const userRepo = use('App/Repositories/UserRepository')
const BaseController = use('BaseController')
const User = use('App/Models/Sql/User')
const Hash = use('Hash')

class UserController extends BaseController {

  constructor() {
    super(userRepo)
  }

  /*DELETE ALL USERS FROM DATABASE*/
  deleteAllUsers = () => userRepo.deleteAllUsers()



}

module.exports = UserController
