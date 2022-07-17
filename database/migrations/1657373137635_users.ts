import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.tinyint('type').notNullable().defaultTo(1)
      table.string('email', 255).notNullable()
      table.string('firstName', 255).notNullable()
      table.string('lastName', 255).notNullable()
      table.string('fullName', 255).notNullable()
      table.string('jobName', 255).nullable()
      table.string('location', 255).nullable()
      table.string('department', 255).nullable()
      table.string('phoneNumber', 50).nullable()
      table.string('extension', 10).nullable()
      table.string('image', 255).nullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
