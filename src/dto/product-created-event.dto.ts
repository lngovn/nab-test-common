import { IsNumber } from "class-validator";
import { CreateProductDto } from "./product.create-dto";

export class ProductCreatedEventDto extends CreateProductDto {
  @IsNumber()
  readonly id!: number;
}
