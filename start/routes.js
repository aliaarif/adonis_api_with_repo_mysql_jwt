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

// Route.resource('test', 'Api/TestController')
// Route.resource('role', 'Api/RoleController')
// Route.resource('post', 'Api/PostController')
// Route.resource('category', 'Api/CategoryController')
// Route.resource('product', 'Api/ProductController')
// Route.resource('profile', 'Api/ProfileController')

// Order Related Routes Start Here...
// Route.resource('order', 'Api/OrderController')
// Route.resource('orderitem', 'Api/OrderItemController')
// Order Related Routes Ends Here...

// Route.get('product/:category_slug/:product_slug/', 'Api/ProductController.productInfo')
// Route.resource('transaction', 'Api/TransactionController')
// Route.resource('productdetail', 'Api/ProductDetailController')
// Route.resource('emailtemplate', 'Api/EmailTemplateController')


Route.on('/').render('welcome')

Route.group(() => {
    // User and their Profile Routes Start Here...
    Route.resource('users', 'Api/UserController')
        .validator(new Map([
            [['users.store'], ['SaveUser']],
            [['users.update'], ['UpdateUser']],
            [['users.delete'], ['DeleteUser']]
        ]))
    Route.delete('delete-all-users', 'Api/UserController.deleteAllUsers')

    Route.post('auth/verify-email', 'Api/AuthController.verifyEmail')
    Route.get('auth/confirm-email/:userid/:token', 'Api/AuthController.confirmEmail')
    Route.post('auth/logout', 'Api/AuthController.logout')
    //  User and their Profile Routes End Here...
}).prefix('api/v1/').middleware(['auth:jwt'])

Route.post('auth/register', 'Api/AuthController.register')
Route.post('auth/login', 'Api/AuthController.login')


Route.group(() => {
    // User and their Profile Routes Start Here...
    Route.resource('products', 'Api/ProductController')
        .validator(new Map([
            [['products.store'], ['SaveProduct']],
            [['products.update'], ['UpdateProduct']],
            [['products.delete'], ['DeleteProduct']]
        ]))
    Route.delete('delete-all-products', 'Api/ProductController.deleteAllProducts')
    Route.get('products/:category_slug/:product_slug/', 'Api/ProductController.productInfo')

    //  User and their Profile Routes End Here...
}).prefix('api/v1/')






Route.group(() => {
    Route.get('users', 'Api/TestController.index')
    // Route.resource('products', 'Api/TestController')
}).prefix('test/')