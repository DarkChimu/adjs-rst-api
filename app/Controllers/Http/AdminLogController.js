'use strict'

const AdminLog = use('App/models/AdminLog')

class AdminLogController {
    async show(){
        const result = await AdminLog.query()
		.fetch()
		/* const result = 
		await Database.table('admin_logs')
		.select('*')
		.where('id','=', 3) */
		return result
    }
}

module.exports = AdminLogController
