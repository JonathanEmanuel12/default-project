import { SignUpValidator } from '#validators/auth/auth_user'
import type { HttpContext } from '@adonisjs/core/http'
import { SignUpUseCase } from '../../use_cases/auth/sign_up_use_case.js'

export default class AuthController {
    constructor(protected signUpUseCase: SignUpUseCase) { }

    public async signUp({ request, response }: HttpContext) {
        const signUpDto = await request.validateUsing(SignUpValidator)
        const token = await this.signUpUseCase.run(signUpDto)
        return response.created(token)
    }
}