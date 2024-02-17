import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { uuid } from 'uuidv4';

export default class UuidBase extends BaseModel {
    static selfAssignPrimaryKey = true

    @column({ isPrimary: true })
    declare id: string

    @beforeCreate()
    static assignUuid(model: UuidBase) {
        model.id = uuid()
    }

}