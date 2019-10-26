


const initialState:string=''


const SearchStringReducer:(state:string, action:{
    type:string, payload:string
})=>{} = (state = initialState, action)=> {
    switch (action.type) {
        case 'SET_SEARCH_STRING':
            return action.payload
            break
        default:
            return state

    }
}

export default SearchStringReducer