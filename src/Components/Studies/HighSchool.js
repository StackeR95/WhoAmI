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
               <p>I entered <a target={'_blank'} href={"https://www.newmhs.com/"}>"New Manor House School "</a> September 2000 and had a great learning scores in all years with average 92% -98%, I majored math,physics and chemistry in last 2 years and i was graduated with score 97% as total for two years. </p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3454.9605517184846!2d31.002870115380606!3d30.009289081895062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sManor%20house%20school%20egypt!5e0!3m2!1sen!2sbe!4v1593969675183!5m2!1sen!2sbe"
                    width="400" height="300" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"></iframe>
            </Col>
        </Row>
    )
}
