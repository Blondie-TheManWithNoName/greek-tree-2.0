import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { IsDefined } from "class-validator";
import { Partners } from "./Partners.entity";

@Entity()
export class God {
  @PrimaryColumn()
  @IsDefined()
  name: string;

  @Column({ default: true })
  @IsDefined()
  gender: boolean;
  // @IsDefined()

  @Column({ type: "text", nullable: true })
  title: string;

  @Column({ type: "text", nullable: true })
  description: string;

  @Column({ default: "Greek" })
  greekName: string;

  @Column({ default: "RomanGod" })
  romanName: string;

  @ManyToOne(() => Partners, (parents) => parents.id)
  @JoinColumn({ name: "parentsId" })
  parents: Partners;

  @OneToMany(() => Partners, (partners) => partners.partner_1)
  partnersAsPartner1: Partners[];

  @OneToMany(() => Partners, (partners) => partners.partner_2)
  partnersAsPartner2: Partners[];
}
