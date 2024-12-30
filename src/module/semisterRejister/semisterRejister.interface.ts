import { Types } from "mongoose"

export type SemisterRejiserDemo ={
    academicSemister:Types.ObjectId,
    status:'Upcomming'|'OnGoing'|'End',
    startDate:string,
    endDate:string,
    minCreadits:number,
    maxCreadits:number
}