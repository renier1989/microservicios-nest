import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {

    @IsString()
    name:string;

    @IsString()
    @IsOptional()
    description?:string;

    @IsNumber()
    @Type( ()=>Number)  // intenta hacer una transformacion a un numero
    price:number;
}
