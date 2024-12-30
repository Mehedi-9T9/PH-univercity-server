import { AcademicSemesterModel } from "../academicSemester/academicSemesterModel"
import { SemisterRejiserDemo } from "./semisterRejister.interface"
import { SemisterRejisterModel } from "./semisterRejister.model"

const createSemisterRejisterIntoDB = async (payload: SemisterRejiserDemo) => {
    const academicSemister = payload?.academicSemister

    //cheking Academic semester
    const isAcademicSemister = await AcademicSemesterModel.findById({ _id: academicSemister })
    if (!isAcademicSemister) {
        throw new Error("Semister Id Not Valid")
    }

    //cheking ,,,semister status 
    const openingSemester = await SemisterRejisterModel.findOne({
        $or:[{status:"Upcomming"},{status:"OnGoing"}]
    })
    if(openingSemester){
        throw new Error(`You can't Rejister beacuase Semister is ${openingSemester.status}`)
    }

    //semister Rejister created
    const result = await SemisterRejisterModel.create(payload)
    return result
}

const getAllSemisterRejisterIntoDB =async()=>{
    const result =await SemisterRejisterModel.find()
    return result
}
const getSingleSemisterRejisterIntoDB =async(id:string)=>{
    const result =await SemisterRejisterModel.findOne({_id:id}).populate('academicSemister')
    return result
}

const updateSemisterRejisterIntoDB =async(id:string,payload:SemisterRejiserDemo)=>{
    const isSemisterRejister =await SemisterRejisterModel.findById({_id:id})
    const requestStatus =payload.status
    if(!isSemisterRejister){
        throw new Error("The Document Don't Find")
    }

    //if status be ended then don't update this document
    if(isSemisterRejister.status==="End"){
        throw new Error("You can't Update")
    }
    //Todo Next time
    if(isSemisterRejister.status==="OnGoing" && requestStatus==="End"){
        throw new Error("sorry!!! you can status Ended")
    }
}
export const semisterRejisterServices = {
    createSemisterRejisterIntoDB,
    getAllSemisterRejisterIntoDB,
    getSingleSemisterRejisterIntoDB,
    updateSemisterRejisterIntoDB
}