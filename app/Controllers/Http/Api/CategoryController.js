'use strict'

const CategoryRepo = use('App/Repositories/CategoryRepository')
const BaseController = use('BaseController')
class CategoryController extends BaseController {
  
  constructor(){
    super(CategoryRepo)
  }
  
}
module.exports = CategoryController