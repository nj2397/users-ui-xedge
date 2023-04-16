import React, { useState, useEffect } from "react";
import { Button, Card, Avatar } from "antd";
import { 
    EditOutlined, 
    HeartTwoTone,
    HeartFilled,
    DeleteFilled,
    PhoneOutlined,
    MailOutlined,
    GlobalOutlined
} from "@ant-design/icons";

import "./Cards.css";

const { Meta } = Card;


const Cards = ({ ele, handleDelete, triggerModal }) => {

    const [heart, setHeart] = useState(false);

    const heartTone = () => {
        return setHeart(!heart);
    }
    
    return (
        <>
        <Card
            // style={{ width: 300 }}
            // headStyle={{ backgroundColor: "lightGrey" }}
            bodyStyle={{ width: "100%", backgroundColor: "lightgrey" }}
            cover={
                <img
                    alt="example"
                    src={`https://avatars.dicebear.com/v2/avataaars/${ele.username}.svg?options[mood][]=happy`}
                    style={{ width: "100%", height: "20ch" }}
                />
            }
            actions={[
                heart ? (<HeartFilled key="heart" style={{ color: 'red'}} onClick={heartTone}/>) : (<HeartTwoTone key="heart" twoToneColor="#eb2f96" onClick={heartTone}/>),
                <EditOutlined key="edit" onClick={() => triggerModal(ele, ele.id)} />,
                <DeleteFilled key="delete" onClick={() => handleDelete(ele.id)}/>
            ]}
            className="card"
        >
            <Meta />
            <div className="meta-container">
                <p style={{ textAlign: "left", fontWeight: 700 }}>{ele.name}</p>
                <p style={{ textAlign: "left", fontSize: "1.5ch" }}><span><MailOutlined /></span>&ensp;{ele.email}</p>
                <p style={{ textAlign: "left", fontSize: "1.5ch" }}><span><PhoneOutlined /></span>&ensp;{ele.phone}</p>
                <p style={{ textAlign: "left", fontSize: "1.5ch" }}><span><GlobalOutlined /></span>&ensp;{ele.website}</p>
            </div>
        </Card>
        </>
    )
}

export default Cards;