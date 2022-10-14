import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import {UserEntity} from "./entities/user.entity";
import {Repository} from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserEntity)
              private readonly userRepo: Repository<UserEntity>) {}

  async createUser(createUser: CreateUserDto) {
    const user = this.userRepo.create(createUser);

    return await this.userRepo.save(user);
  }

  async getUser(id: number) {
    const user = await this.userRepo.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`)
    }

    return user;
  }

  deleteUser(id: number) {
    return this.userRepo.delete(id);
  }

  findUser(username: string): Promise<UserEntity> {
    return this.userRepo.findOneBy({ username });
  }
}
