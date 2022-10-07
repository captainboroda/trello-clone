import { IsNotEmpty } from "class-validator";

export class CreateDashboardDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
