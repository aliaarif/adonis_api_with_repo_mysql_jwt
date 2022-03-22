'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {

    Route.post('/auth/verify-email', 'Api/AuthController.verifyEmail')


    Route.resource('role', 'Api/RoleController')
    Route.resource('post', 'Api/PostController')
    Route.resource('category', 'Api/CategoryController')
    Route.resource('product', 'Api/ProductController')

    // User and their Profile Routes Start Here...
    // Route.resource('profile', 'Api/ProfileController')
    Route.resource('user', 'Api/UserController')
        .validator(new Map([
            [['user.store'], ['SaveUser']],
            [['user.update'], ['UpdateUser']],
            [['user.delete'], ['DeleteUser']]
        ]))
    Route.delete('delete-all-users', 'Api/UserController.deleteAllUsers')
    //  User and their Profile Routes End Here...

    // Order Related Routes Start Here...
    // Route.resource('order', 'Api/OrderController')
    // Route.resource('orderitem', 'Api/OrderItemController')
    // Order Related Routes Ends Here...

}).prefix('api/v1/').middleware(['auth:jwt'])

Route.get('/confirm-email/:userid/:token', 'Api/AuthController.confirmEmail').middleware(['auth:jwt'])


Route.post('/auth/register', 'Api/AuthController.register')

Route.post('/auth/login', 'Api/AuthController.login')
Route.post('/auth/logout', 'Api/AuthController.logout')

// Route.get('product/:category_slug/:product_slug/', 'Api/ProductController.productInfo')
// Route.resource('transaction', 'Api/TransactionController')
// Route.resource('productdetail', 'Api/ProductDetailController')
// Route.resource('emailtemplate', 'Api/EmailTemplateController')

// Route.get('logout', async ({ auth, response }) => {
//     await auth.logout()
//     response.redirect('login')
// })

// Route.resource('usersrole', 'Api/UsersRoleController')
