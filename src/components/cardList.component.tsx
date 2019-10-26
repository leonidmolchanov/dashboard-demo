import React from 'react'
import './../styles/cardStyle.css'
import '../styles/App.css';
import {connect} from 'react-redux'
import CardComponent from './card.component'
// @ts-ignore
import { Draggable, Droppable } from 'react-drag-and-drop'
import {dragCard} from './../actions/cardContentActions'
import storeType from "../interfaces/store";
interface IState {
    dragElementIndex:any
}

interface IProps {
    cardsStore:any,
    searchString:any,
    avtorsStore:any,
    dispatch:any
}

class CardListComponent extends React.Component<IProps, IState > {

    constructor(props:IProps) {
        super(props)
        this.state={
            dragElementIndex:false
        }
    }


    onDrop=(index:number)=>{
        if(this.state.dragElementIndex || this.state.dragElementIndex===0){
this.props.dispatch(dragCard(this.state.dragElementIndex, index))
            this.setState({
                dragElementIndex:false
            })
        }
    }
    onDrag=(index:number)=>{
        if(!this.state.dragElementIndex)
            this.setState({
                dragElementIndex:index
            })
    }
    render() {
        return (
            <div className="App-body">
            {this.props.cardsStore.map((item:any, index:number)=>{

return(
    <Draggable
        key={index}
        onDrag={()=>this.onDrag(index)}>
        <Droppable
            onDrop={()=>this.onDrop(index)}>
            {
                this.props.searchString === '' ?
                    <CardComponent key={index} index={index} title={item.title} text={item.text} avtor={item.avtor}/>
                    :
                    item.title.indexOf(this.props.searchString) > -1 ?
                        <CardComponent key={index} index={index} title={item.title} text={item.text}
                                       avtor={item.avtor}/>
                        :
                        this.props.avtorsStore.get(item.avtor).name.indexOf(this.props.searchString) > -1 ||
                        this.props.avtorsStore.get(item.avtor).lastName.indexOf(this.props.searchString) > -1
                            ?
                            <CardComponent key={index} index={index} title={item.title} text={item.text}
                                           avtor={item.avtor}/>
                            :

                            null
            }
        </Droppable>
    </Draggable>

)
            })}


            </div>
        )
    }


}
const mapStateToProps = function(store:storeType) {
    return {
        cardsStore: store.cardsStore,
        searchString:store.searchString,
        avtorsStore: store.avtorsStore};
}

export default connect(mapStateToProps)(CardListComponent)
