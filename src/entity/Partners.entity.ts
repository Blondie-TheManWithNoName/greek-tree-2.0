import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { IsDefined } from "class-validator";
import { God } from "./God.entity";
import { Child } from "./Child.entity";

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

  @OneToMany(() => Child, (child) => child.parents)
  children: Child[];
}
