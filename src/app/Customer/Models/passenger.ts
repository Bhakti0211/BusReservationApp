export class Passenger {
    pId: number 
    tId: number
    pName: string
    age: number
    adhaar: string
    gender: string

    constructor(pid: number, tid:number, pname:string, age:number, adhar:string, gender:string) {
        this.pId = pid
        this.tId = tid
        this.age = age
        this.adhaar = adhar
        this.gender = gender
        this.pName = pname
    }
}
