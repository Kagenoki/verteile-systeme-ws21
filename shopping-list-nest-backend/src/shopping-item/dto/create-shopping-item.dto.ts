import {ApiProperty} from "@nestjs/swagger";
import{IsDate, IsNumber, IsString, IsBoolean} from "class-validator";

export class CreateShoppingItemDto {
    @ApiProperty({description: 'Shopping list item'})
    @IsString()
    name: string;

    @IsNumber()
    quantity: number;

    @IsDate()
    creationDate: Date;

    @IsBoolean()
    shoppingDone: boolean;
}
