import React, {useRef, useState} from 'react';
import {Collapse, Typography, Button, Col, Row, Modal} from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined,LoginOutlined } from '@ant-design/icons';
import { AppContext } from '../../Context/AppProvider';
import { leaveRoom} from "../../firebase/service";
import {AuthContext} from "../../Context/AuthProvider";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;


export default function RoomList() {
    const { rooms, setIsAddRoomVisible, setSelectedRoomId } = React.useContext(AppContext);
    const [isModalVisible, setIsModalVisible] = useState(false);

    console.log(rooms)
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (data) => {
        deleteRooms(data);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleAddRoom = () => {
        setIsAddRoomVisible(true);
    };
    const deleteRooms = (data) =>{
        leaveRoom('rooms',data);
    }

    const {user: { uid },} = React.useContext(AuthContext);
    return (

        <Collapse ghost defaultActiveKey={['1']}>
            <PanelStyled header='Danh sách các phòng' key='1'>
                {rooms.map((room) => (
                    <>
                        <Row>
                            <Col md={22}><LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
                                {room.name}
                            </LinkStyled></Col>
                            <Col md={2}>
                                 <LoginOutlined style={{color:"red"}}
                                                // onClick={showModal}
                                               onClick={()=> deleteRooms({user: { uid },id:room.id})}
                                />
                                {/*<Modal title="Rời phòng" visible={isModalVisible} onOk={handleOk({user: { uid },id:room.id})} onCancel={handleCancel}>*/}
                                {/*    Xác nhận rời phòng hiện tại*/}
                                {/*</Modal>*/}
                            </Col>

                        </Row>

                    </>
                ))}
                <Button
                    type='text'
                    icon={<PlusSquareOutlined />}
                    className='add-room'
                    onClick={handleAddRoom}
                >
                    Thêm phòng
                </Button>
                {/*<Button type="primary" onClick={showModal}>*/}
                {/*    Open Modal*/}
                {/*</Button>*/}

            </PanelStyled>
        </Collapse>
    );
}
