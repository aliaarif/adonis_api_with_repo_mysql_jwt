'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')
const Config = use('Config')
module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Authenticator
  |--------------------------------------------------------------------------
  |
  | Authentication is a combination of serializer and scheme with extra
  | config to define on how to authenticate a user.
  |
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  |
  */
  authenticator: 'jwt',

  /*
  |--------------------------------------------------------------------------
  | Session
  |--------------------------------------------------------------------------
  |
  | Session authenticator makes use of sessions to authenticate a user.
  | Session authentication is always persistent.
  |
  */


  session: {
    serializer: Env.get('DB_CONNECTION') === 'mysql' ? 'lucid' : 'LucidMongo',
    model: Env.get('DB_CONNECTION') === 'mysql' ? `${Config.get('constants.modelPath')}User` : 'App/Models/NoSql/User',
    scheme: 'session',
    uid: 'email',
    password: 'password'
  },

  /*
  |--------------------------------------------------------------------------
  | Basic Auth
  |--------------------------------------------------------------------------
  |
  | The basic auth authenticator uses basic auth header to authenticate a
  | user.
  |
  | NOTE:
  | This scheme is not persistent and users are supposed to pass
  | login credentials on each request.
  |
  */
  basic: {
    serializer: Env.get('DB_CONNECTION') === 'mysql' ? 'lucid' : 'LucidMongo',
    model: Env.get('DB_CONNECTION') === 'mysql' ? `${Config.get('constants.modelPath')}User` : 'App/Models/NoSql/User',
    scheme: 'basic',
    uid: 'email',
    password: 'password'
  },

  /*
  |--------------------------------------------------------------------------
  | Jwt
  |--------------------------------------------------------------------------
  |
  | The jwt authenticator works by passing a jwt token on each HTTP request
  | via HTTP `Authorization` header.
  |
  */
  jwt: {
    serializer: Env.get('DB_CONNECTION') === 'mysql' ? 'lucid' : 'LucidMongo',
    model: Env.get('DB_CONNECTION') === 'mysql' ? `${Config.get('constants.modelPath')}User` : 'App/Models/NoSql/User',
    token: Env.get('DB_CONNECTION') === 'mysql' ? `${Config.get('constants.modelPath')}Token` : 'App/Models/NoSql/Token',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    expiry: '1m',
    options: {
      secret: Env.get('APP_KEY')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Api
  |--------------------------------------------------------------------------
  |
  | The Api scheme makes use of API personal tokens to authenticate a user.
  |
  */
  api: {
    serializer: Env.get('DB_CONNECTION') === 'mysql' ? 'lucid' : 'LucidMongo',
    model: Env.get('DB_CONNECTION') === 'mysql' ? `${Config.get('constants.modelPath')}User` : 'App/Models/NoSql/User',
    token: Env.get('DB_CONNECTION') === 'mysql' ? `${Config.get('constants.modelPath')}Token` : 'App/Models/NoSql/Token',
    scheme: 'api',
    uid: 'email',
    password: 'password'
  },

}
