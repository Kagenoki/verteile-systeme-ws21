import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString, IsBoolean } from "class-validator";

export class CreateShoppingItemDto
{
    @ApiProperty({ description: 'Shopping list item' })
    @IsString()
    name: string;

    @ApiProperty({ description: 'quantity of item' })
    @IsNumber()
    quantity: number;

    @ApiProperty({ description: 'Creaton date of item' })
    @IsDate()
    creationDate: Date;

    @ApiProperty({ description: 'Item bought' })
    @IsBoolean()
    shoppingDone: boolean;
}
