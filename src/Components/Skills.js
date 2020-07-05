import React, {useEffect, useState} from "react";
import {Carousel} from "antd";

export default function (props) {

    return (
        <div className={'container'}>
<h3>Programming Languages:</h3>
<ul>
    <li>
         Java “4” --> Springboot
    </li>
    <li>
        JavaScript “4” --> React Native , Node JS
    </li>
    <li>
        Php “4” --> WordPress
    </li>
    <li>
        HTML “4” --> Web Development
    </li>
    <li>
        C++ “3” -->Problem Solving
    </li>
</ul>
            <h3>Soft Skills:</h3>
            <ul>
                <li>
                    Responsibility
                </li>
                <li>
                  Team Leader
                </li>
                <li>
                 Flexible
                </li>
                <li>
                    Eager to learn
                </li>
                <li>
                Good Listener
                </li>
            </ul>
        </div>
    )
}
