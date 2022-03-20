'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class EmailTemplateRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('EmailTemplateRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'EmailTemplate')
  return new EmailTemplateRepository(model)
})

module.exports = ioc.use('EmailTemplateRepository')