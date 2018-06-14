import React from 'react';
import Header from '../components/Header/Header'
import InputSection from '../components/InputSection/InputSection'
import './Main.css'
import HeaderInput from '../components/HeaderInput/HeaderInput'
import BodyInput from '../components/BodyInput/BodyInput'
import ResponseComp from '../components/ResponseComp/ResponseComp'
import Modal from '../components/Modal/Modal'
import { ENGINE_METHOD_DIGESTS } from 'constants';

export default class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            appName: 'RESTful Tool',
            githubLinks: 'https://github.com/',
            fetching: false,
            modalMode: false,
            modal: {
                content: '',
                type: ''
            }
        }
    }

    handleHttpHeaderChange = (index, newHeader) => {

        this.props.onUpdateHeader(index, newHeader);
    }

    handleAddHttpHeader = () => {
        this.props.onAddHeader();
    }

    sendRequest = () => {

        if(!this.props.url){
            this.setState({
                modalMode: true,
                modal:{
                    content: 'Url is empty'
                }
            })
            return;
        }

        this.setState({
            fetching: true
        })

        this.props.sendRequest()
        .then(
            () => { this.setState({fetching: false})}
        )

    }
    onModalConfirm = () => {
        this.setState({
            modalMode: false
        })
    }
    onModalCancel = () => {
        this.setState({
            modalMode: false
        })
    }
    renderModal = () => {
        if(this.state.modalMode) return (<Modal type={this.state.modal.type} yesText = { this.state.modal.yesText }
        noText = {this.state.modal.noText} content = {this.state.modal.content}
        onYesClick = {this.onModalConfirm }
        onNoClick = {this.onModalCancel}/>)
    }
    render(){
        console.log(this.props);
        return (
        <div>
            {this.renderModal()}
            <Header appName = {this.state.appName } githubLinks = { this.state.githubLinks }></Header>
            <div className = 'top-input'>
                <InputSection url={this.props.url}
                method={this.props.method}
                onSend={ this.sendRequest }
                onMethodChange = { (method) => this.props.onMethodChange(method) }
                onUrlUpdate = { (url) => this.props.onUrlUpdate(url) }></InputSection>
            </div>
            <div className="bottom">
                <div className="bottom-left">
                    
                    <HeaderInput inputs = {this.props.httpHeaders}
                    onAddHeader = {this.handleAddHttpHeader }
                    onHeaderChanged = {this.handleHttpHeaderChange}></HeaderInput>
                    <BodyInput body={ this.props.httpBody }
                    onBodyChange={ (body) => this.props.onBodyChange(body) }></BodyInput>
                    
                </div>
                <div className="bottom-right">
                    <ResponseComp response={this.props.response}
                    fetching={ this.state.fetching }></ResponseComp>
                </div>
            </div>
        </div>
        )
    }
}
