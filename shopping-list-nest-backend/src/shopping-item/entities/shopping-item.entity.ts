import {Column} from 'typeorm';
import {PrimaryGeneratedColumn} from 'typeorm';
import {Entity} from 'typeorm';

@Entity()
export class ShoppingItem {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string;

    @Column()
    quantity: number;

    @Column()
    creationDate: Date;

    @Column()
    shoppingDone: boolean;
}