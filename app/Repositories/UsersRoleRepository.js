'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class UsersRoleRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('UsersRoleRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'UsersRole')
  return new UsersRoleRepository(model)
})

module.exports = ioc.use('UsersRoleRepository')