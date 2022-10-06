import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./users/entities/user.entity";
import {ProfileEntity} from "./profiles/entities/profile.entity";
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'lol',
      database: 'trello',
      logNotifications: true,
      entities: [
        UserEntity,
        ProfileEntity
      ],
      synchronize: true,
    }),
    ProfilesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
