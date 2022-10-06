import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfileEntity} from "./entities/profile.entity";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProfileEntity]),
    UsersModule,
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService]
})
export class ProfilesModule {}
