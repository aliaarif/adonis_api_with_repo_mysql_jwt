'use strict'

const OrderItemRepo = use('App/Repositories/OrderItemRepository')
const BaseController = use('BaseController')
class OrderItemController extends BaseController {
  
  constructor(){
    super(OrderItemRepo)
  }
  
}
module.exports = OrderItemController