import cardsType from './../interfaces/cards'
interface cardsActionType
        {
            title?: string,
            text?: string,
            avtor?: number,
            type?:string,
            payload?:any
        }


const {List} = require('immutable');

const initialState:cardsType = List([
    {title:'Карточка 1',
    text:'Текст 1 карточки',
    avtor:0},
    {title:'Карточка 2',
        text:'Текст 2 карточки',
        avtor:1},
    {title:'Карточка 3',
        text:'Текст 3 карточки',
        avtor:2},



])
const newCard:{
    title?:string,
    text?:string,
    avtor?:number
} =
    {title:'Новая карточка',
        text:'Заполните поле',
        avtor:0}

const CardsStoreReducer:(state:cardsType, action:{
    type:string, payload:cardsType
})=>cardsType = (state = initialState, action:cardsActionType)=> {
    switch (action.type) {
        case 'CREATE_CARD':
            return state.push(newCard)
            break
        case 'DRAG_CARD':
            const contentCard:any = state.get(action.payload.firstIndex)
            // state.delete(action.payload.firstIndex)

            return state.delete(action.payload.firstIndex).insert(action.payload.secondIndex,contentCard)
            break

        case 'DELETE_CARD':
            return state.delete(action.payload)
            break
        case 'CHANGE_CONTENT_CARD':


            return  state.set(action.payload.cardIndex,   {title:action.payload.title,
                text:action.payload.text,
                avtor:action.payload.avtorIndex});

            break
        default:
            return state

    }
}

export default CardsStoreReducer