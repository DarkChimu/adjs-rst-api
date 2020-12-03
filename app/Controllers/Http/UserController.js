'use strict'

const AdminLog = use('App/Models/AdminLog')
const User = use('App/Models/User')
const AdminLogger = use('App/Lib/AdminLog')

class UserController {

	async login({ request, auth }){
		const {email, password} = request.all();
		const token = await auth.attempt(email, password);
		return token;

	}
	async store({ request }){
		const {email, password} = request.all();
		const user = await User.create({
			email,
			password,
			username: email
		});

		const requestData = request.body;

		AdminLogger.log(email, 'Se Registró' , requestData)
		
		return this.login(...arguments);
	}
	async show({ request }){
		//const {currentUser} = request.all();
		//AdminLogger.log(currentUser, 'Consultó la Base de datos de usuario');
		
		const result = await AdminLog.query()
		.fetch()
		/* const result = 
		await Database.table('admin_logs')
		.select('*')
		.where('id','=', 3) */
		return result
	}
}

module.exports = UserController
