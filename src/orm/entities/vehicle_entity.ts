import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity('vehicle')
export default class Vehicle {
    @PrimaryGeneratedColumn()
    vehicle_id!: number;

    @Column()
    vehicle_version_id!: string;

    @Column()
    vehicle_type_id!: string;

    @Column()
    registration_no!:string

    @Column()
    vin!:string

    @Column()
    color!:string

    @Column()
    manufacturing_year!:string

    @CreateDateColumn()
    created_on!: Date;

    @UpdateDateColumn()
    updated_on!: Date;
}