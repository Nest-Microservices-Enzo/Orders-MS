import { IsEnum, IsOptional } from "class-validator"
import { PaginationDto } from "src/common"
import { OrderSatusList,  } from "../enum/order.enum"
import { OrderStatus } from "@prisma/client"

export class OrderPAginationDto extends PaginationDto {

    @IsOptional()
    @IsEnum(OrderSatusList,{
        message:`Valid statuss are ${OrderSatusList}`
    })
    status:OrderStatus
}