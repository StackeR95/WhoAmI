import React, {useRef, useState} from "react";
import {Col, Row, Timeline} from "antd";


export default function (props) {
const manorHouseSchool = useRef();
const cairoUniversity = useRef();
const [state,setState]=useState({
    type:'HighSchool'
});
return (
    <Row   gutter={16}>
        <Col  xs={24} md={24} xl={3} xxl={3} >
    <Timeline style={{height:100,paddingTop:7}}>
        <Timeline.Item><a disabled onClick={()=>{
           let oldState = {...state};
           oldState.type = 'HighSchool';
            setState({...oldState});
            cairoUniversity.current.removeAttribute('disabled');
            manorHouseSchool.current.setAttribute('disabled',true)}} ref={manorHouseSchool} >Manor House School</a></Timeline.Item>
        <Timeline.Item><a onClick={()=>{
            let oldState = {...state};
            oldState.type = 'CairoUniversity';
            setState({...oldState});
            manorHouseSchool.current.removeAttribute('disabled');
            cairoUniversity.current.setAttribute('disabled',true)}} ref={cairoUniversity} >Cairo University</a></Timeline.Item>
    </Timeline>
        </Col>
        <Col style={{borderLeft:'10px',borderColor:'black',paddingTop:'-10'}} xs={24} md={24} xl={8} xxl={8} >
            <p style={{fontWeight:"bold",paddingTop:state.type =="HighSchool" ?0:'9%'}}>{state.type == 'HighSchool' ?

                'Degree: National Egyptian High School Certificate with grade 97%'
                :' GPA: 3.24 Major: Communication & Computer Engineering.'}
            </p>
        </Col>
    </Row>
)
}
