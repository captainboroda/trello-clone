import {
  Body, ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards, UseInterceptors
} from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  getUser(@Request() req) {
    const { userId } = req.user;

    return this.usersService.getUser(userId);
  }

  @Patch()
  updateUser() {
    // return this.usersService.updateUser();
  }


  //TODO: remove after test, user should be created via auth module
  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return this.usersService.createUser(createUser);
  }

  //TODO: remove after test, user should be created via auth module
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.deleteUser(id);
  }

}
