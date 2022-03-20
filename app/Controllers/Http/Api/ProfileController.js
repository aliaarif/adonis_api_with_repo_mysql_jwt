'use strict'

const ProfileRepo = use('App/Repositories/ProfileRepository')
const BaseController = use('BaseController')
class ProfileController extends BaseController {
  
  constructor(){
    super(ProfileRepo)
  }
  
}
module.exports = ProfileController