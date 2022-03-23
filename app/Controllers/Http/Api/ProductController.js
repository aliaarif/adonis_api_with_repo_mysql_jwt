'use strict'

const ProductRepo = use('App/Repositories/ProductRepository')
const BaseController = use('BaseController')
const Product = use('App/Models/Sql/Product')
class ProductController extends BaseController {

  constructor() {
    super(ProductRepo)
  }

  // index() {
  //   const products = Product.all()
  //   return {
  //     "data": products
  //   }
  // }
}
module.exports = ProductController