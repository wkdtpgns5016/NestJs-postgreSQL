import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity({ name: "user_info" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;
}