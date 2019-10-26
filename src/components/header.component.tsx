import React from 'react'
import {connect} from 'react-redux'
import {setSearchString} from './../actions/searchStringActions'
import {createCard} from './../actions/cardContentActions'
import './../styles/headerStyle.css'
import storeType from "../interfaces/store";
interface IState {
}

interface IProps {
    searchString:string,
    dispatch:any
}

class HeaderComponent extends React.Component<IProps, IState > {

    constructor(props:IProps) {
        super(props)
    }

setSearchString = (string:any)=>{
        this.props.dispatch(setSearchString(string.target.value))
}

createNewCard=()=>{
        this.props.dispatch(createCard())
}

    render() {
        return (
            <div className='header-container'>
                <a href='#' className='create-button' onClick={this.createNewCard} >Создать новую карточку</a>
                <input className="search-input" type="text" value={this.props.searchString} placeholder={'Поиск по названию и Автору'} onChange={this.setSearchString} />

            </div>
        )
    }


}
const mapStateToProps = function(store:storeType) {
    return {
        searchString: store.searchString};
}
//@ts-ignore

export default connect(mapStateToProps)(HeaderComponent)
