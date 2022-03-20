'use strict'

const PostRepo = use('App/Repositories/PostRepository')
const BaseController = use('BaseController')
class PostController extends BaseController {
  
  constructor(){
    super(PostRepo)
  }
  
}
module.exports = PostController