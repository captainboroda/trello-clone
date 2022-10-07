import { Controller, Post, UseGuards, Request } from "@nestjs/common";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
    // return 'this method should return jwt token'
  }

  @Post('register')
  register() {
    return 'this method sahould return empty if register'
  }
}
