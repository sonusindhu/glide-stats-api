import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class JwtTokens extends BaseSchema {
  protected tableName = 'jwt_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('').onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('token', 64).notNullable().unique()
      table.datetime('expires_at', { useTz: true }).nullable()
      table.string('refresh_token').notNullable().unique().index()
      table.datetime('refresh_token_expires_at', { useTz: true }).notNullable()
      table.datetime('created_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
