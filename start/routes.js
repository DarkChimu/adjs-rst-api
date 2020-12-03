'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(()=>{
	Route.get('/test', ()=>{
		return { message: 'hi'}
	})
	Route.post('/users/register', 'UserController.store')
	Route.post('/users/login', 'UserController.login')
	Route.get('/users/data', 'UserController.show')
	Route.get('/admin/logs', 'AdminLogController.show')

	Route.get('/admin/translation/:id', 'AdminTranslationController.index')
}).prefix('/api/v1')