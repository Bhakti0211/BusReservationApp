import { Ipassenger } from "./ipassenger"
import { Passenger } from "./passenger"

export interface ICreatetransactionrequest {
    tId: number
    busId: number
    totalCost: number
    customerId: number
    dateOfBooking: string
    seats: string[]
    passengers: Passenger[]
}
