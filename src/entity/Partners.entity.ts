import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { IsDefined } from "class-validator";
import { God } from "./God.entity";

@Entity()
export class Partners {
  @PrimaryGeneratedColumn()
  @IsDefined()
  id: number;

  @ManyToOne(() => God)
  //   @Column()
  @IsDefined()
  partner_1: God;

  @ManyToOne(() => God)
  @IsDefined()
  partner_2: God;

  @OneToMany(() => God, (god) => god.parents)
  children: God[];
}
