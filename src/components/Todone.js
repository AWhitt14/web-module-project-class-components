import React from 'react';

export default class Todone extends React.Component{

    
    render(){
        return(
            <div>
                <p>{this.props.task.task}</p>
            </div>
        )
    }
}