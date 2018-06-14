import React from 'react'
import './Loader.less'

export default class Loader extends React.Component{

    render(){
        return (
            <div className='loader'>
                <div className='circle circle1' ></div>
                <div className='circle circle2'></div>
                <div className='circle circle3'></div>
            </div>
        )
    }
}