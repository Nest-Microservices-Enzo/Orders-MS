import { OrderStatus } from '@prisma/client';
import { IsEnum, IsUUID } from 'class-validator';
import { OrderSatusList } from '../enum/order.enum';



export class ChangeOrderStatusDto {

  @IsUUID(4)
  id: string;

  @IsEnum( OrderSatusList, {
    message: `Valid status are ${ OrderSatusList }`
  })
  status: OrderStatus;


}