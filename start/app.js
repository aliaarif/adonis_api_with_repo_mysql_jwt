'use strict'

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/framework/providers/ViewProvider',
  '@adonisjs/lucid/providers/LucidProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/shield/providers/ShieldProvider',
  '@adonisjs/session/providers/SessionProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/validator/providers/ValidatorProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@rocketseat/adonis-acl/providers/AclProvider',
  //'@ruanitto/adonis-acl/providers/AclProvider',
  //'adonis-acl/providers/AclProvider',


  '@adonisjs/mail/providers/MailProvider'
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider',
  '@rocketseat/adonis-acl/providers/CommandsProvider',
  //'@ruanitto/adonis-acl/providers/CommandsProvider',
  //'adonis-acl/providers/CommandsProvider',
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {
  TaskModel: 'App/Models/Task',

  //Repositories
  BaseRepository: 'App/Repositories/BaseRepository',
  UserRepository: 'App/Repositories/UserRepository',
  TaskRepository: 'App/Repositories/TaskRepository',

  //Controllers
  BaseController: 'App/Controllers/Http/BaseController',
  myHelpers: 'App/Helpers',

  Role: 'Adonis/Acl/Role',
  Permission: 'Adonis/Acl/Permission',

}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = [
  'App/Commands/Module'
]

module.exports = { providers, aceProviders, aliases, commands }
