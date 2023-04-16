import React, { useState, useEffect } from "react";
import {
    Row,
    Col
} from 'antd';

import { fetchList } from "./FetchList.js";
import Cards from "./Cards.js";
import ModalForm from "./ModalForm.js";

import "./Main.css";


const Main = () => {
    const [ list, setList ] = useState([]);
    const [ user, setUser ] = useState({});
    const [ isOpen, setIsOpen ] = useState(false);

    const triggerModal = (ele, id) => {
        // console.log(ele);
        setIsOpen(true);
        setUser(ele);
    }

    const fetchMethod = async () => {
        setList(await fetchList());
        return;
    }

    useEffect(() => {
        fetchMethod();
    }, []);

    const handleDelete = (id) => {
        let newList = list.filter((ele) => ele.id !== id);
        setList(newList);
    }

    // console.log(isOpen);


    return (
        <>
        { isOpen && (<ModalForm user={user} isOpen={isOpen} setIsOpen={setIsOpen} list={list} setList={setList}/>)}
        <div className="container">
            <Row gutter={{ xs: 24, sm: 12, md: 6 }}>
                {list.map((ele) => (
                    <Col key={ele.id}>
                        <Cards ele={ele} handleDelete={handleDelete} triggerModal={triggerModal}/>
                    </Col>
                ))}
            </Row>
        </div>
        </>
    )
    
}

export default Main;