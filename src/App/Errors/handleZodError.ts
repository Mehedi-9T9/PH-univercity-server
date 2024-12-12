import { ZodError, ZodIssue } from "zod"
import { TGenericErrorResponse } from "../GlogalInterface/errorTypes"

const handleZodError=(err:ZodError):TGenericErrorResponse=>{
    const errorResponse =err.issues.map((issu:ZodIssue)=>{
    return {
      path:issu.path[issu.path.length -1],
      message:issu.message
    }
  })
  const statusCode =400
  const message="Validation Error"

  return{
    statusCode,
    message,
    errorSources:errorResponse
  }
}
  export default handleZodError