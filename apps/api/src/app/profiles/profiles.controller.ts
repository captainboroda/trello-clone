import {Body, Controller, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import {CreateProfileDto} from "./dto/create-profile.dto";
import {UpdateUserDto} from "../users/dto/update-user.dto";
import {UpdateProfileDto} from "./dto/update-profile.dto";

@Controller('profile')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}


  @Post(':userId')
  createProfile(
    //TODO: userId should be getted from req.user
    @Param('userId', ParseIntPipe) userId: number,
    @Body() createProfile: CreateProfileDto) {
    return this.profilesService.createProfile(userId, createProfile);
  }

  @Patch(':userId')
  //TODO: userId should be getted from req.user
  updateProfile(@Param('userId') userId: number,
                @Body() updateProfile: UpdateProfileDto) {
    return this.profilesService.updateProfile(userId, updateProfile)
  }

  @Get(':userId')
  //TODO: userId should be getted from req.user
  getProfile(@Param('userId', ParseIntPipe) userId: number) {
    return this.profilesService.getProfile(userId);
  }
}
