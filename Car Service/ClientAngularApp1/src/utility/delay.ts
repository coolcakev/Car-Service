
export const delay = <T>(ms: number, nameDelay: keyof T, delay: any) => {
    return new Promise(resolve => {
        delay[nameDelay] = setTimeout(resolve, ms)
    })
}