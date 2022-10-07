import { Body, Controller, Get, Param, ParseIntPipe, Request, Patch, Post, UseGuards } from "@nestjs/common";
import { ProfilesService } from './profiles.service';
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller('profile')
export class ProfilesController {

  constructor(private readonly profilesService: ProfilesService) {}

  @Post()
  createProfile(
    @Body() createProfile: CreateProfileDto,
    @Request() req) {
    const { userId } = req.user;

    return this.profilesService.createProfile(userId, createProfile);
  }

  @Patch()
  updateProfile(@Request() req,
                @Body() updateProfile: UpdateProfileDto) {
    const { userId } = req.user;

    return this.profilesService.updateProfile(userId, updateProfile)
  }

  @Get()
  getProfile(@Request() req) {
    const { userId } = req.user;

    return this.profilesService.getProfile(userId);
  }
}
