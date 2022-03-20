'use strict'
const { ioc } = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/_BaseRepository')
const Config = use('Config')

class TransactionRepository extends BaseRepository{
  model
  constructor(model){
    super(model)
    this.model = model
  }

}

ioc.singleton('TransactionRepository', function (app) {
  const model = app.use(Config.get('constants.modelPath')+'Transaction')
  return new TransactionRepository(model)
})

module.exports = ioc.use('TransactionRepository')