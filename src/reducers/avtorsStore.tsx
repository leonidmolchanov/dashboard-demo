import avtorsType from './../interfaces/avtors'
const {List} = require('immutable');

const initialState:avtorsType = List([
    {name:'Илья',
    lastName:'Пупырев'
    },
    {name:'Антон',
        lastName:'Григорьев'
    },
    {name:'Стас',
        lastName:'Михайлов'
    },


])

const AvtorsStoreReducer:(state:avtorsType, action:{
    type:string, payload:avtorsType
})=>avtorsType = (state = initialState, action)=> {
    switch (action.type) {
        default:
            return state

    }
}

export default AvtorsStoreReducer