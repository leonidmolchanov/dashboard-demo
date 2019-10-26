import React from 'react'
import './../styles/cardStyle.css'
import {connect} from "react-redux";
import {changeAvtorCard, deleteCard} from './../actions/cardContentActions'
import storeType from './../interfaces/store'
interface IState {
}

interface IProps {
    title:string
    text:string
    avtor:number,
    avtorsStore:any,
    dispatch:any,
    key:number,
    index:number
}

class CardComponent extends React.Component<IProps, IState > {

    constructor(props:IProps) {
        super(props)

    }

    titleChange=(e:{target:{value:any}})=>{
        this.props.dispatch(changeAvtorCard(this.props.index, this.props.avtor, e.target.value, this.props.text));
    }
    textChange=(e:{target:{value:any}})=>{
        this.props.dispatch(changeAvtorCard(this.props.index, this.props.avtor, this.props.title , e.target.value));
    }
    avtorChange=(e:{target:{selectedIndex:number}})=>{
        this.setState({selectedId: e.target.selectedIndex});
        this.props.dispatch(changeAvtorCard(this.props.index, e.target.selectedIndex, this.props.title , this.props.text));
    }

    deleteCard=(index:number)=>{
        this.props.dispatch(deleteCard(index));
    }
    render() {
        return (

            <div className="card-body">
                <a  className="card-close-button" onClick={()=>this.deleteCard(this.props.index)} href='#'>X</a>
                <input placeholder={'Заполните заголовок'} className="card-title-input" type="text" value={this.props.title} onChange={this.titleChange} />
                <textarea className="card-title-area" value={this.props.text} onChange={this.textChange} />
                <p className="card-avtor-label">Автор:</p>

                <select
                    defaultValue={this.props.avtor}
                    onChange={this.avtorChange}>

                    {
                        this.props.avtorsStore.map((item:any, index:number)=>{
                            return(
                                <option value={index}

                                        key={index}>
                                    {item.name} {item.lastName}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }


}


const mapStateToProps = function(store:storeType) {
    return {
        avtorsStore:store.avtorsStore};
}

export default connect(mapStateToProps)(CardComponent)
