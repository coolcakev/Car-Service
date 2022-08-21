import { Injectable } from "@angular/core"
import { HttError } from "../models/httError"

@Injectable({
  providedIn: "root",
})
export class ErrorService {

  getErrorMessage(error: HttError, message: string) {
    if (error !== null&&error.detail!== undefined) {
      return error.detail
    }
    return message
  }
}