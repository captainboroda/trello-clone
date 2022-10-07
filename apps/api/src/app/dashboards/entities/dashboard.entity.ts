import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "../../users/entities/user.entity";

@Entity()
export class DashboardEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => UserEntity, (user) => user.dashboards)
  user: UserEntity;

  @Column()
  userId: number;

  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at'
  })
  updatedAt: Date;
}
