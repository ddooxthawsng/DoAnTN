import React from "react";
import {Button, Col, message, Row} from "antd";
import Title from "antd/es/typography/Title";
import firebase, {auth} from "../../firebase/config";
import {useNavigate} from "react-router-dom";
import {addDocument, generateKeywords} from "../../firebase/service";
import {Image} from 'antd';
import {FacebookOutlined,GooglePlusOutlined} from '@ant-design/icons';
const key = 'updatable';
const fbProvider = new firebase.auth.FacebookAuthProvider();
const ggProvider = new firebase.auth.GoogleAuthProvider();



export default function Login(){
    let navigate = useNavigate();
   const handleFbLogin =async () => {
       let {additionalUserInfo, user} = await auth.signInWithPopup(fbProvider);

       if (additionalUserInfo?.isNewUser) {
           addDocument('users',{
               displayName : user.displayName,
               email : user.email,
               photoUrl : user.photoURL,
               uid : user.uid,
               providerId :additionalUserInfo.providerId,
               keywords :generateKeywords(user.displayName?.toLowerCase())
            })
       }
   }
   const handleGgLogin = async ()=>{
       let {additionalUserInfo, user} = await auth.signInWithPopup(ggProvider);

       if (additionalUserInfo?.isNewUser) {
           addDocument('users',{
               displayName : user.displayName,
               email : user.email,
               photoUrl : user.photoURL,
               uid : user.uid,
               providerId :additionalUserInfo.providerId,
               keywords :generateKeywords(user.displayName?.toLowerCase())
           })
       }
   }

    return(
        <div>
            <Row>
                <Col md={14}>
                    <Image src={"/images/login.jpg"} width={"100%"} preview={false}/>
                </Col>
                <Col md={10}>
                    <Row justify='center' style={{height:"100%",backgroundColor:"white"}}>
                        <Col span={15} >
                            <Image src={"/images/logo.jpg"} width={"100%"} preview={false}></Image>
                            <div >
                            <Title style={{textAlign :'center'}}>Đăng nhập</Title>
                                <h4 style={{textAlign :'center'}}>Chọn phương thức đăng nhập</h4>
                            <Button style={{width :'100%',marginBottom :5}} onClick={handleGgLogin} icon={<GooglePlusOutlined />}>
                                Đăng nhập bằng Google
                            </Button>
                            <Button style={{width :'100%'}} onClick={handleFbLogin} icon={<FacebookOutlined />}>
                                Đăng nhập bằng Facebook
                            </Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}