import React from 'react'
import './ResponseComp.less'
import Loader from '../Loader/Loader'

export default class ResponseComp extends React.Component{

    render(){
        const res = this.props.response;

        const loader = this.props.fetching ? <Loader/> : '';
        const status = res ? 'status: ' + res.status : '';

        const data = res ? JSON.stringify(res.data, null, 4) : ''; 
        const textarea = !this.props.fetching && res ? <textarea defaultValue={data}></textarea> : '' ;

        return (
            <div className='response-comp'>
                <div className='label-box'>
                    <label>RESPONSE</label>
                    <span className='status' > {status} </span>
                </div>
                <div className='result-box'>
                    { loader }
                    { textarea }
                </div>
            </div>
        )
    }
}