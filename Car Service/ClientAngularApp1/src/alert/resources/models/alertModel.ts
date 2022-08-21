import { AlertType } from "../types/alertType";

export interface AlertModel {
  message: string,
  buttonText: string,
  type: AlertType
}