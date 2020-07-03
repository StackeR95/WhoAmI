import React from "react";

export default function (props) {
    const setObjectDisplay = (props)=>{
        switch (props.subMenuKey) {
            case 6 :
                return "Brief";
            case 7 :
                return "Marriott";
            case 8 :
                return "IBM";
            case 9 :
                return "Pixelogic";
            case 10 :
                return "Purple Panda";

        }
    }
    return <div>
        {setObjectDisplay(props)}
    </div>
}
