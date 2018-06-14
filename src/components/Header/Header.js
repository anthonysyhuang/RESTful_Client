import React from 'react'
import './Header.css'

export default class Header extends React.Component{

    onClick = () => {
        this.props.changeTitle(this.props.title);
    }

    render(){
        return(
            <header>
                <div className={'container'}>
                    <h1 className={'app-name'}>{ this.props.appName }</h1>
                    <span><a href={this.props.githubLinks}>GitHub</a></span>
                </div>
            </header>
        )
    }
}