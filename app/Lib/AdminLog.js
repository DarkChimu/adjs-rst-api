'use strict'

const Database = use('Database')
const AdminLog = use('App/Models/AdminLog')

class AdminLogger{
    static async log(id, message, request, response){
        console.log(`${id} ${message} ${request}`)
        
        const genLog = await AdminLog.create({
            user_id: id,
            message,
            request,
            response,
        })
        return genLog
    }
}


module.exports = AdminLogger