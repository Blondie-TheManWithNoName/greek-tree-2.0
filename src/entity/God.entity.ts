import { Entity, Column, PrimaryColumn } from "typeorm";
import { IsDefined } from "class-validator";

@Entity()
export class God {
  @PrimaryColumn()
  @IsDefined()
  name: string;

  @Column()
  @IsDefined()
  gender: boolean;

  @Column("text")
  @IsDefined()
  description: string;

  @Column()
  greekName: string;

  @Column()
  romanName: string;

  //   @ManyToMany(() => Partners)
  //   @JoinTable()
  //   partners: Partners[];
}
