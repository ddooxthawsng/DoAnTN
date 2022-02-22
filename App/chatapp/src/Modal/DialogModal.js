import React from "react";
import {Button, Modal} from "antd";

class DialogModal extends React.Component{
    constructor() {
        super();
        this.state = {
            showModal : false
        }
    }
    onClick = async () =>{
        await this.setState({
            showModal : !this.state.showModal
        })
    }
    render() {
        return(
        <>
            <Button type="primary" onClick={this.onClick}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" visible={this.state.showModals} onCancel={this.onClick()}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
        )
    }
}

export default DialogModal;