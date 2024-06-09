import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsDefined } from "class-validator";
import { God } from "./God.entity";
import { Partners } from "./Partners.entity";

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  @IsDefined()
  id: number;

  @ManyToOne(() => God, { eager: true })
  @JoinColumn({ name: "child" })
  child: God;

  @ManyToOne(() => Partners, (parents) => parents.children)
  parents: Partners;
}
