import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name!: string;
  @IsString()
  readonly code!: string;
  @IsString()
  readonly color!: string;
  @IsNumber()
  readonly price!: number;
  @IsNumber()
  readonly branchId!: number;
}
