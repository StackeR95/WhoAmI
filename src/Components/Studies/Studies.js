import React from "react";
import {Timeline} from "antd";
import Brief from "./Brief";
import HighSchool from "./HighSchool";
import University from "./University";

export default function (props) {

    const setObjectDisplay = (props)=>{
        switch (props.subMenuKey) {
            case 2 :
                return <Brief/>;
            case 3 :
                return <HighSchool/>;
            case 4 :
                return <University/>;
            case 9 :
                return "Pixelogic";
            case 10 :
                return "Purple Panda";

        }
    }
    return <div style={{height:'100%'}} className={'studiesContainer'}>
        {setObjectDisplay(props)}
    </div>
}
