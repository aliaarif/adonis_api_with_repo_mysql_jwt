'use strict'

const TransactionRepo = use('App/Repositories/TransactionRepository')
const BaseController = use('BaseController')
class TransactionController extends BaseController {
  
  constructor(){
    super(TransactionRepo)
  }
  
}
module.exports = TransactionController