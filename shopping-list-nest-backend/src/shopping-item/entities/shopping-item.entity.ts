import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
@Entity({ schema: "public", name: "ShoppingItem" })
export class ShoppingItem
{
    @PrimaryGeneratedColumn('increment', { name: "id", unsigned: true })
    id: number

    @Column({ type: 'varchar', length: 300, name: "name", nullable: false })
    name: string;

    @Column({ type: "int", name: "quantity", nullable: false })
    quantity: number;

    @Column({ type: "date", name: "creationDate", nullable: false })
    creationDate: Date;

    @Column({ type: "boolean", name: "shoppingDone", nullable: false })
    shoppingDone: boolean;
}