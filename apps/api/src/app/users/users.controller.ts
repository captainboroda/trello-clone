import {Controller, Get, Patch} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser() {
    return this.usersService.getUser();
  }

  @Patch()
  updateUser() {
    return this.usersService.updateUser();
  }

}
