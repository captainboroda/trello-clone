import { Controller, Delete, Get, Post, UseGuards, Request, Param, ParseIntPipe } from "@nestjs/common";
import { JwtAuthGuard } from "../../auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('dashboards')
export class DashboardsController {


  @Get()
  getDashboads(@Request() req,
               @Param('id', ParseIntPipe) id: number) {
    return 'This action should return all dashboards'
  }

  @Get(':id')
  getDashboard(@Request() req,
               @Param('id', ParseIntPipe) id: number) {
    return 'This action should return single dashboard'
  }

  @Post()
  createDashboard() {
    return 'This action should create dashboard'
  }

  @Delete(':id')
  deleteDashboard(@Request() req,
                  @Param('id', ParseIntPipe) id: number) {
    return 'This action should delete dashboard'
  }


}
