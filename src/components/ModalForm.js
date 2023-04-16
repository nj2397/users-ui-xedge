import React, { useState, useRef } from "react";
import { Button, Form, Modal, Input, Space } from "antd";
import "./ModalForm.css";

const ModalForm = ({
    user,
    isOpen,
    setIsOpen,
    list,
    setList,
}) => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const websiteRef = useRef(null);

    console.log(user);

    const handleOk = () => {
        // console.log(nameRef.current.input.value);
        if(nameRef === null || emailRef === null || phoneRef === null || websiteRef === null)
            return;
        list.find((ele) => {
            if(ele.id === user.id){
                ele.name = nameRef.current.input.value;
                ele.email = emailRef.current.input.value;
                ele.phone = phoneRef.current.input.value;
                ele.website = websiteRef.current.input.value;
            }
        });
        setList(list);
        setIsOpen(false);
    }

    const handleCancel = () => {
        setIsOpen(false);
    }

    return (
        <Modal 
            title="Details" 
            open={isOpen} 
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form method="get" className="modal-container">
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'This field is required',
                    },
                    ]}
                    style={{ width: "100%" }}
                >
                    <Input className="input-container" defaultValue={user.name} ref={nameRef}/>
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                    {
                        required: true,
                        type: "email",
                        message: 'This field is required',
                    },
                    ]}
                    style={{ width: "100%" }}
                >
                    <Input className="input-container" defaultValue={user.email} ref={emailRef}/>
                </Form.Item>
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                    {
                        required: true,
                        type: "number",
                        message: 'This field is required',
                    },
                    ]}
                    style={{ width: "100%" }}
                >
                    <Input className="input-container" defaultValue={user.phone} ref={phoneRef}/>
                </Form.Item>
                <Form.Item
                    label="Website"
                    name="website"
                    rules={[
                    {
                        required: true,
                        message: 'This field is required',
                    },
                    ]}
                    style={{ width: "100%" }}
                >
                    <Input className="input-container" defaultValue={user.website} ref={websiteRef}/>
                </Form.Item>
                {/* <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit">Ok</Button>
                        <Button>Cancel</Button>
                    </Space>
                </Form.Item> */}
            </Form>
        </Modal>
    )
}
export default ModalForm;