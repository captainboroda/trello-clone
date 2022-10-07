import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ProfileEntity} from "./entities/profile.entity";
import {Repository} from "typeorm";
import {CreateProfileDto} from "./dto/create-profile.dto";
import {UsersService} from "../users/users.service";
import {UpdateProfileDto} from "./dto/update-profile.dto";

@Injectable()
export class ProfilesService {
  constructor(@InjectRepository(ProfileEntity)
              private readonly profileRepo: Repository<ProfileEntity>,
              private readonly userService: UsersService) {}

  async createProfile(userId: number,createProfile: CreateProfileDto): Promise<ProfileEntity> {
    const user = await this.userService.getUser(userId);
    const profile = this.profileRepo.create(createProfile);
    profile.user = user;

    return this.profileRepo.save(profile);
  }

  async updateProfile(userId: number, updateProfile: UpdateProfileDto): Promise<ProfileEntity> {
    await this.profileRepo.update({userId}, updateProfile);

    return this.getProfile(userId);
  }

  async getProfile(userId: number): Promise<ProfileEntity> {
    const profile = await this.profileRepo.findOneBy({userId});

    if (!profile) {
      throw new NotFoundException()
    }

    return profile;
  }
}
