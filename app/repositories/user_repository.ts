import User from "#models/user";
import { SignUpDto } from "../dtos/auth/sign_up_dto.js";

export class UserRepository {
    public async create(signUpDto: SignUpDto): Promise<User> {
        return await User.create(signUpDto)
    }
}