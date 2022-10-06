import {IsEmail, IsNotEmpty, IsOptional, MinLength} from "class-validator";

export class CreateProfileDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(2)
  firstName: string;

  @IsNotEmpty()
  @MinLength(2)
  lastName: string;

  @IsOptional()
  phone: string;
}
