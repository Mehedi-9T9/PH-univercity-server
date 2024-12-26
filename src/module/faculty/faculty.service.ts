import { Request } from "express"
import { TFacultyDemo } from "./faculty.interface"
import { facultyModel } from "./faculty.model"

const createFacultyIntoDB = async (payload: TFacultyDemo) => {
    const result = await facultyModel.create(payload)
    return result
}
const updateFacultyIntoDB = async (payload: TFacultyDemo, id: string) => {
    const result = await facultyModel.findByIdAndUpdate({ _id: id }, { name: payload.name }, { new: true })
    return result
}
const getSingleFacultyIntoDB = async (id: string) => {
    const result = await facultyModel.findOne({ _id: id })
    return result
}
 
const searchFacultyIntoDB = async (quary:Record<string,unknown>) => {
    console.log(quary);
    const quaryCopy ={...quary}

    let searchTerm = '';
    if (quary?.searchTerm) {
        searchTerm = quary?.searchTerm as string
    }
    const searchableField =['firstName', 'lastName']
    const searchQuary = facultyModel.find({
            $or: searchableField.map((field) => (
                {
    
                    [field]: { $regex: searchTerm, $options: "i"}
                }
            ))
        })
        const deleteQuary =['searchTerm','sort','limit','page',]
        deleteQuary.forEach((item)=> delete quaryCopy[item])
    const filterQuary = searchQuary.find(quaryCopy)
    let sort ='-createdAt'
    if(quary?.sort){
        sort = quary.sort as string
    }
    const sortQuary = filterQuary.sort(sort)

  //limit start
    // let limit =1
    // if(quary?.limit){
    //     limit =Number(quary.limit)
    // }
    // const limitQuary =await sortQuary.limit(limit)
    // return limitQuary


    //Pazination Start
    //restart limit
let page=1
let limit =1
let skip =0
if(quary?.limit){
    limit =Number(quary.limit)
}
if(quary.page){
    page =Number(quary?.page)
    skip=(page -1)*limit
}
const pazinateQuary =sortQuary.skip(skip)

 const limitQuary =await pazinateQuary.limit(limit)
    return limitQuary
    
    



    // const result = await facultyModel.find({
    //     $or: searchableField.map((field) => (
    //         {

    //             [field]: { $regex: searchTerm, $options: "i"}
    //         }
    //     ))
    // })
    // return result
}
export const facultyServices = {
    createFacultyIntoDB,
    getSingleFacultyIntoDB,
    updateFacultyIntoDB,
    searchFacultyIntoDB
}