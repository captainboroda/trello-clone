import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";

@Entity('profiles')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({
    name: 'first_name'
  })
  firstName: string;

  @Column({
    name: 'last_name'
  })
  lastName: string;

  @Column({
    nullable: true
  })
  phone: string;

  @OneToOne(() => UserEntity, (user) => user.profile, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  user: UserEntity

  @Column()
  userId: number;
}
