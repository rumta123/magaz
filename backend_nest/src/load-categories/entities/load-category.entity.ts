import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("load_categoryes")
export class LoadCategory {
  @PrimaryColumn({ name: "index", type: "bigint" })
  index: number;

  @Column({ type: "text" })
  title: string;

  @Column({ name: "img_link", type: "text", nullable: true })
  imgLink: string;

  @Column({ name: "categ_link", type: "text", nullable: true })
  categLink: string;
}
