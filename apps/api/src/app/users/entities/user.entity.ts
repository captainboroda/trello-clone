import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { DateEntity } from "./date.entity";
import {ProfileEntity} from "../../profiles/entities/profile.entity";
import { DashboardEntity } from "../../dashboards/entities/dashboard.entity";
import { Exclude } from "class-transformer";

@Entity('users')
export class UserEntity extends DateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column({
    name: 'is_active',
    default: true
  })
  isActive: boolean;

  @OneToOne(() => ProfileEntity, (profile) => profile.user)
  profile: ProfileEntity

  @OneToMany(() => DashboardEntity, (dashboard) => dashboard.user)
  dashboards: DashboardEntity[]


  constructor(partial: Partial<UserEntity>) {
    super();
    Object.assign(this, partial);
  }
}
