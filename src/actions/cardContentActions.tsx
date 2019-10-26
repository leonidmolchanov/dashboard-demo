const changeAvtorCard:(cardIndex:number, avtorIndex:number, title:string, text:string)=>{
    type:string,
    payload:{
        cardIndex?:number,
        avtorIndex?:number,
        title?:string,
        text?:string
    }
} = (cardIndex, avtorIndex, title, text) => {

    return { type: 'CHANGE_CONTENT_CARD',
        payload:{
            cardIndex:cardIndex,
            avtorIndex: avtorIndex,
            title: title,
            text: text
        }}

}

const deleteCard:(index:number)=>{
    type:string,
    payload:number
} = (index) => {

    return { type: 'DELETE_CARD',
        payload:index}

}

const createCard:()=>{
    type:string
} = () => {

    return { type: 'CREATE_CARD',
    }

}

const dragCard:(firstIndex:number, secondIndex:number)=>{
    type:string,
    payload:{
    firstIndex:number,
    secondIndex:number}

} = (firstIndex, secondIndex) => {

    return { type: 'DRAG_CARD',
        payload:{
    firstIndex:firstIndex,
        secondIndex:secondIndex}
    }
    }

export {changeAvtorCard, deleteCard, createCard, dragCard}
