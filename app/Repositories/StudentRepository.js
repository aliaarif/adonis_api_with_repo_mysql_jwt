'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class StudentRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('StudentRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'Student')
  return new StudentRepository(model)
})

module.exports = ioc.use('StudentRepository')