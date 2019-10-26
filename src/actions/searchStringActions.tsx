const setSearchString:(string:string)=>{
    type:string,
    payload:string
} = (string) => {

    return { type: 'SET_SEARCH_STRING',
        payload:string}

}




export {setSearchString}
