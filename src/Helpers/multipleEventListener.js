export default function (element, eventsArray, cb){
    if(!(eventsArray instanceof Array)){
        throw 'addMultipleEventListeners' + 'pass an array of event listeners'
    }
    for(let i = 0; i < eventsArray.length; i++){
        element.addEventListener(eventsArray[i], cb, false)
    }
}