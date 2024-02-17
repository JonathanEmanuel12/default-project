import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
    vine.object({
        email: vine.string().trim().minLength(6),
        fullName: vine.string().trim(),
        password: vine.string().trim().escape()
    })
)
