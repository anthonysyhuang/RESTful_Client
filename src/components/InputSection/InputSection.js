import React from 'react'
import './InputSection.css'

export default class InputSection extends React.Component{

    constructor(props){
        super(props);

        console.log(this.props);
    }

    onSelect= (e) => {
        console.log(e.target.value);
        this.props.onMethodChange(e.target.value);
    }

    onUrlChange = (e) => {
        this.props.onUrlUpdate(e.target.value);
    }

    send = (e) => {
        this.props.onSend();
    }

    render(){
        return (
            <div className="input-section">
                <div className="method-and-url">
                    <select value={ this.props.method } onChange={ this.onSelect }>
                        <option value='GET'>GET</option>
                        <option value='POST'>POST</option>
                        <option value='PUT'>PUT</option>
                        <option value='PATCH'>PATCH</option>
                        <option value='DELETE'>DELETE</option>
                        <option value='OPTIONS'>OPTIONS</option>
                        <option value='HEAD'>HEAD</option>
                    </select>
                    <input className='url-input' type='text' value={this.props.url}
                    onChange={ this.onUrlChange }/>
                </div>
                <button className='send-btn' onClick={ this.send }>Send</button>
            </div>
        )
    }
}