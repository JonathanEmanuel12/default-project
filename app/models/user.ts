import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { beforeSave, column } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import UuidBase from './base/uuid_base.js'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
})

export default class User extends compose(UuidBase, AuthFinder) {
    @column()
    declare fullName: string

    @column()
    declare email: string

    @column()
    declare password: string

    @column.dateTime({ autoCreate: true })
    declare createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    declare updatedAt: DateTime | null

    @beforeSave()
    static async hashPassword(user: User) {
        if (user.$dirty.password) {
            user.password = await hash.make(user.password)
        }
    }

    static accessTokens = DbAccessTokensProvider.forModel(User)
}