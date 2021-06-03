import React from 'react';


export default class Todo extends React.Component{
    
    render(){
       
       
        return(
            <div className={this.props.isComplete(this.props.task)} onClick={()=> this.props.togCom(this.props.task.id)}>
                <p>{this.props.task.task}</p>
            </div>
        )

    }
}