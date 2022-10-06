import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { DateEntity } from "./date.entity";
import {ProfileEntity} from "../../profiles/entities/profile.entity";


@Entity('users')
export class UserEntity extends DateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  username: string;

  @Column()
  password: string;

  @Column({
    name: 'is_active',
    default: true
  })
  isActive: boolean;

  @OneToOne(() => ProfileEntity, (profile) => profile.user)
  profile: ProfileEntity
}
