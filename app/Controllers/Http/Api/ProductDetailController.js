'use strict'

const ProductDetailRepo = use('App/Repositories/ProductDetailRepository')
const BaseController = use('BaseController')
class ProductDetailController extends BaseController {
  
  constructor(){
    super(ProductDetailRepo)
  }
  
}
module.exports = ProductDetailController