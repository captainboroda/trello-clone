import { Module } from '@nestjs/common';
import { DashboardsService } from './dashboards/dashboards.service';
import { DashboardsController } from './dashboards/dashboards.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DashboardEntity } from "./entities/dashboard.entity";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([DashboardEntity]),
    UsersModule
  ],
  providers: [DashboardsService],
  controllers: [DashboardsController]
})
export class DashboardsModule {}
