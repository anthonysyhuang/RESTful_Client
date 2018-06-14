import React from 'react'
import './HeaderInput.less'

export default class HeaderInput extends React.Component{

    addHeader = () => {
        this.props.onAddHeader();
    }

    handleHeaderKeyInput = (index, oldHeader, e) => {

        const newHeader = {...oldHeader};
        newHeader.key = e.target.value;
        this.props.onHeaderChanged(index, newHeader);
    }

    handleHeaderValInput = (index, oldHeader, e) => {

        const newHeader = {...oldHeader};
        newHeader.value = e.target.value;
        this.props.onHeaderChanged(index, newHeader);
    }

    render(){
        const inputs = this.props.inputs ? this.props.inputs : Array(0);

        const renderInputs = inputs.map((input, index) => {
            const key = input.key ? input.key : ''
            const value = input.value ? input.value : ''
            return (
                <div className="input-box" key={index}>
                    <input type='text' placeholder='key' value={key}
                    onChange={ (e) => {this.handleHeaderKeyInput(index, input, e)} }/>
                    <input type='text' placeholder='value' value={value}
                    onChange={ (e) => {this.handleHeaderValInput(index, input, e)} }/>
                </div>
            )
        })

        return (
            <div className="header-input-section">
                <div className='header'>
                    <label>HTTP HEADER</label>
                    <button 
                    onClick = { this.addHeader }
                    className="add-button">+</button>
                </div>
                <div className='inputs'>
                    { renderInputs }
                </div>
            </div>
        )
    }
}