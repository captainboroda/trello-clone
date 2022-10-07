import { Module } from '@nestjs/common';
import { DashboardsService } from './dashboards/dashboards.service';
import { DashboardsController } from './dashboards/dashboards.controller';

@Module({
  providers: [DashboardsService],
  controllers: [DashboardsController]
})
export class DashboardsModule {}
