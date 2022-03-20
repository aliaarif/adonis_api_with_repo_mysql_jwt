'use strict'

class User {

  get sanitizationRules() {
    return {
      email: 'trim|normalize_email',
      password: 'trim'
    }
  }

  get rules() {
    return {
      name: 'required|trim|min:6',
      email: 'required|email',
      username: 'required|trim',
      password: 'required|trim'

    }
  }

  get messages() {
    return {
      'name.required': 'You must provide a email address.',
      'email.required': 'You must provide a email address.',
      'username.required': 'User Name field is required',
      'password.min': 'Password should be atleast 6 character long.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }

  get validateAll() {
    return true
  }
}

module.exports = User