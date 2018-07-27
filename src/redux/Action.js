export function  Todo (){
    return {type: 'todo'}
}
export function  Done (){
    return {type: 'done'}
}
export function setDone(id){
    return {type: 'setdone',id}
}
export function Hienform (){
    return {type: 'hienForm'}
}
export function Add(topic,content){
    return {type: 'add',topic, content}
}