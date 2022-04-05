import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'
import Order from './Order'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public qtd: string

  @column()
  public price: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Product)
  public productId: HasMany<typeof Product>

  @hasMany(() => Order)
  public orderId: HasMany<typeof Order>  

}
