import React from 'react'
import './Modal.less'

export default class Modal extends React.Component{

    renderButtons = () => {

        const yesText = this.props.yesText ? this.props.yesText : 'Confirm';
        const NoText = this.props.yesText ? this.props.noText : 'Cancel';

        if(this.props.type === 'YES_NO'){
            
            return (
            <div className='buttons'>
                <button onClick={ (e)=> this.props.onYesClick() }>{yesText}</button>
                <button onClick={ (e)=> this.props.onNoClick() }>{NoText}</button>
            </div>
            )
        }

        return (
            <div className='buttons'>
                <button onClick={ (e)=> this.props.onYesClick() }>{yesText}</button>
            </div>
        )
    }

    render() {
        return (
            <div className='modal'>
                <div className='contain'>
                    <p>{this.props.content}</p>
                    { this.renderButtons() }
                </div>
            </div>
        )
    }
}