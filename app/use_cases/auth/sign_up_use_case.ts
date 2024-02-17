import User from "#models/user";
import { AccessToken } from "@adonisjs/auth/access_tokens";
import { SignUpDto } from "../../dtos/auth/sign_up_dto.js";
import { UserRepository } from "../../repositories/user_repository.js";

export class SignUpUseCase {
    constructor(protected userRepository: UserRepository) { }

    public async run(signUpDto: SignUpDto): Promise<AccessToken> {
        const user = await this.userRepository.create(signUpDto)
        return await User.accessTokens.create(user)
    }
}