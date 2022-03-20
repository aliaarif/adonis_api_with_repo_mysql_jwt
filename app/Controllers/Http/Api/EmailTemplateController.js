'use strict'

const EmailTemplateRepo = use('App/Repositories/EmailTemplateRepository')
const BaseController = use('BaseController')
class EmailTemplateController extends BaseController {
  
  constructor(){
    super(EmailTemplateRepo)
  }
  
}
module.exports = EmailTemplateController