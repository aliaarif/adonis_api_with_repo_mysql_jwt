'use strict'

const UsersRoleRepo = use('App/Repositories/UsersRoleRepository')
const BaseController = use('BaseController')
class UsersRoleController extends BaseController {
  
  constructor(){
    super(UsersRoleRepo)
  }
  
}
module.exports = UsersRoleController