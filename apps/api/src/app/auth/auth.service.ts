import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(private readonly userService: UsersService,
              private readonly jwtService: JwtService) {}

  async validateUser(username: string, userPassword: string) {
    const user = await this.userService.findUser(username);

    if (!user) {
      return null;
    }

    const isPasswordMatch = userPassword === user.password;

    if (!isPasswordMatch) {
      return null;
    }

    const { password, ...result } = user;
    return result;
  }

  login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id
    };

    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
