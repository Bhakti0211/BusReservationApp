import { Ipassenger } from "./ipassenger"
import { Passenger } from "./passenger"

export class TransactionDetails {
    public static customerId: number
    
    public static seatCount: number
    public static seats: string[]
    public static passengers: Passenger[]
    public static totalCost: number
    public static cardNumber: string
    
    public static busId: number
    public static source: string
    public static destination: string
    public static dTime: string
    public static aTime: string
    public static busNo: string
    public static driverName: string
    public static driverContact: number
    public static pickup: string
    public static typeOfBus: string
    public static distance: number
    public static seatCost: number

    public static custFirstName: string
    public static custLastName: string
    public static customerContact: string
    public static email: string
    public static tId: number
    public static password: string
    public static showbtns: boolean = true
}
