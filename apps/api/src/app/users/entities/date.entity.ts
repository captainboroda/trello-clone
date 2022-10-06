import {CreateDateColumn, Entity, UpdateDateColumn} from "typeorm";

@Entity()
export class DateEntity {
  @CreateDateColumn({
    name: 'created_at'
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at'
  })
  updatedAt: Date;
}
