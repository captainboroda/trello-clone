import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DashboardEntity } from "../entities/dashboard.entity";
import { Repository } from "typeorm";
import { CreateDashboardDto } from "../dto/create-dashboard.dto";
import { UsersService } from "../../users/users.service";

@Injectable()
export class DashboardsService {

  constructor(@InjectRepository(DashboardEntity)
              private readonly dashboardRepo: Repository<DashboardEntity>,
              private readonly usersService: UsersService) {}

  getDashboards(userId: number): Promise<DashboardEntity[]> {
    return this.dashboardRepo.find({
      where: {
        userId
      }
    });
  }

  async getDashboard(userId: number, id: number): Promise<DashboardEntity> {
    const dashboard = await this.dashboardRepo.findOneBy({id, userId});

    if (!dashboard) {
      throw new NotFoundException(`Dashboard with id${id} not found`);
    }

    return dashboard;
  }

  async createDashboard(userId: number, createDashboard: CreateDashboardDto): Promise<DashboardEntity> {
    const user = await this.usersService.getUser(userId);
    const dashboard = this.dashboardRepo.create(createDashboard);
    dashboard.user = user;

    return await this.dashboardRepo.save(dashboard);
  }

}
