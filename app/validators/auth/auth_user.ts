import vine from '@vinejs/vine'

export const SignUpValidator = vine.compile(
    vine.object({
        email: vine.string().trim().minLength(6).unique(async (db, value) => {
            return (await db.from('users').where('email', value).first()) === null
                ? true
                : false
        })
        ,
        fullName: vine.string().trim(),
        password: vine.string().trim().escape()
    })
)
