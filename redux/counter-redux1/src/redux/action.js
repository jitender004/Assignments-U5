// import { ADD_COUNTER,REDUCE_COUNTER } from "./actionType"

export const addCounter = (payload)=>{
    // console.log(payload)
    return {
        type:"ADD_COUNTER",
        payload
    }
}
export const reduceCounter = (payload)=>{
    return {
        type:"REDUCE_COUNTER",
        payload
    }
}
export const resetCounter = (payload)=>{
    return {
        type:"RESET",
        payload
    }
}
export const addNumber = (payload)=>{
    return {
        type:"ADD_NUM",
        payload
    }
}
