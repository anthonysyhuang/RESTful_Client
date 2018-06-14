import React from 'react'
import './BodyInput.less'

export default class BodyInput extends React.Component{

    onBodyChange = (e) => {
        console.log(e.target.value);
        this.props.onBodyChange(e.target.value);
    }

    render(){
        return(
            <div className='body-inputs'>
                <label>BODY</label>
                <textarea placeholder='Type your http request body here...'
                onChange = {this.onBodyChange} value = { this.props.body }>
                </textarea>
            </div>
        )
    }
}