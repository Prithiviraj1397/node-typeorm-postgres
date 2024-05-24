import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('vehicle_categories')
export default class Vehicle_categories {
    @PrimaryGeneratedColumn()
    vehicle_category_id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    created_on!: Date;

    @UpdateDateColumn()
    updated_on!: Date;
}