import { Controller, Delete, Get, Post, UseGuards, Request, Param, ParseIntPipe, Body } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";
import { DashboardsService } from "./dashboards.service";
import { CreateDashboardDto } from "../dto/create-dashboard.dto";

@UseGuards(JwtAuthGuard)
@Controller('dashboards')
export class DashboardsController {

  constructor(private readonly dashboardsService: DashboardsService) {
  }

  @Get()
  getDashboards(@Request() req) {
    const { userId } = req.user;
    return this.dashboardsService.getDashboards(userId);
  }

  @Get(':id')
  getDashboard(@Request() req,
               @Param('id', ParseIntPipe) id: number) {
    const { userId } = req.user;
    return this.dashboardsService.getDashboard(userId, id);
  }

  @Post()
  createDashboard(@Request() req,
                  @Body() createDashboard: CreateDashboardDto) {
    const { userId } = req.user;
    return this.dashboardsService.createDashboard(userId, createDashboard)
  }

  @Delete(':id')
  deleteDashboard(@Request() req,
                  @Param('id', ParseIntPipe) id: number) {
    return 'This action should delete dashboard'
  }
}
