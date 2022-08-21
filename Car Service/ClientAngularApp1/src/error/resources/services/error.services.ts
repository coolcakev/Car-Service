import { Injectable } from "@angular/core"
import { HttError } from "../models/httError"

@Injectable({
  providedIn: "root",
})
export class ErrorService {

  getErrorMessage(error: HttError, message: string) {
    if (error !== null&&error.message!== undefined) {
      return error.message.substring(0,200)
    }
    return message
  }
}