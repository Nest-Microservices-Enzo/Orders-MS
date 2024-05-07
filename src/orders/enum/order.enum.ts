import { OrderStatus } from "@prisma/client";



export const OrderSatusList = [
    OrderStatus.PENDING,
    OrderStatus.DELIVERED,
    OrderStatus.CANCELLED
]