import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { hashSync } from 'bcryptjs';
import { Exclude } from "class-transformer";
import { Contact } from "./contact.user.entity";


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ length: 50 })
    name: string

    @Column({ length: 50, unique: true })
    email: string

    @Column({ length: 120 })
    @Exclude()
    password: string

    @Column({ length: 11, unique: true })
    phone: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @OneToMany(() => Contact, contacts => contacts.user)
    contacts: Contact[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword(){
        this.password = hashSync(this.password, 10)
    }

}