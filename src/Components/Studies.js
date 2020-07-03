import React from "react";

export default function (props) {

    const setObjectDisplay = (props)=>{
        switch (props.subMenuKey) {
            case 2 :
                return "Brief";
            case 3 :
                return "High School";
            case 4 :
                return "University";
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
