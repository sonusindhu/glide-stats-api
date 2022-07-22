import Route from '@ioc:Adonis/Core/Route'

Route.post('/auth/login', 'AuthController.login')
Route.post('/auth/register', 'AuthController.register')
Route.post('/auth/logout', 'AuthController.logout')

Route.post('/auth/reset', 'AuthController.reset')
