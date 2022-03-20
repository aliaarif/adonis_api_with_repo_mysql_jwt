'use strict'

const OrderRepo = use('App/Repositories/OrderRepository')
const BaseController = use('BaseController')
class OrderController extends BaseController {
  
  constructor(){
    super(OrderRepo)
  }
  
}
module.exports = OrderController