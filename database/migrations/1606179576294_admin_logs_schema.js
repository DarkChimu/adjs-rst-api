'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminLogsSchema extends Schema {
  up () {
    this.create('admin_logs', (table) => {
      
      table.increments()
      
      table.string('user_id')
      
      table.string('message')
      
      table.jsonb('request')
      
      table.jsonb('response')

      table.timestamps()
    })
  }

  down () {
    this.drop('admin_logs')
  }
}

module.exports = AdminLogsSchema
