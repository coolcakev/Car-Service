import { Delay } from "src/types/utitiesType/delayType"

export const delay = (ms: number, delay: Delay) => {
    return new Promise(resolve => {
        delay.delayId = setTimeout(resolve, ms)
    })
}