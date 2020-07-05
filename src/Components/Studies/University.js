import React, {useRef, useState} from "react";
import {Col, Row, Timeline} from "antd";


export default function (props) {
    const manorHouseSchool = useRef();
    const cairoUniversity = useRef();
    const [state,setState]=useState({
        type:'HighSchool'
    });
    return (
        <Row  gutter={16}>
            <Col style={{display:'flex'}}  xs={24} md={24}  >
                <p>In 2013 after graduating from high school i decided to join <a target={'_blank'} href={"http://eng.cu.edu.eg/en/"}>"Faculty Of Engineering Cairo University"</a> , I studied for 5 years Communication & Computer Engineering Department. In last 2 years i majored in Computer Engineering more.I graduated with GPA 3.24 </p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13817.467582882848!2d31.21167!3d30.0263303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x282c4b44cdf7e83c!2sFaculty%20of%20Engineering%20-%20Cairo%20University!5e0!3m2!1sen!2sbe!4v1593970528354!5m2!1sen!2sbe"
                    width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
            </Col>
        </Row>
    )
}
