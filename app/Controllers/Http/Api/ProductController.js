'use strict'

const ProductRepo = use('App/Repositories/ProductRepository')
const BaseController = use('BaseController')
class ProductController extends BaseController {

  constructor() {
    super(ProductRepo)
  }
}
module.exports = ProductController