import React, {useEffect, useState} from "react";
import {Carousel} from "antd";

export default function (props) {
    const [imagesArray,setImageArray]=useState(['0','1','2']);
    const initialState={
        imagesArray:["0","1","2"],
        durationText:"",
        company:"",
        description:"",
    }
    const [state,setMyState]=useState(initialState);
    useEffect(()=>{
        const url = '/assets';
        switch (props.subMenuKey) {
            case 6 :
                setMyState({
                    company:"Brief",
                    imagesArray:[`${url}/Marriott/1.png`,`${url}/Marriott/2.png`,`${url}/Marriott/3.png`],
                });
                return ;
            case 7 :
                setMyState({
                    company:"Marriott",
                    durationText: "Duration : 3 Months June-August 2016",
                    description:"In 2016 ",
                    imagesArray:[`${url}/Marriott/1.png`,`${url}/Marriott/2.png`,`${url}/Marriott/3.png`],
                });
                return ;
            case 8 :
                setMyState({
                    company:"IBM",
                    description:"In 2017 Ibm where providing free courses in Egypt for their Cloud service \"Bluemix\" I applied for it and due to my performance  the instructor offered me an intern at Ibm, After my good performance they decided to let me be assistant instructor for 50 students.",
                    durationText:"Duration : 1 Month September 2017",
                    imagesArray:[`${url}/IBM/1.jpg`,`${url}/IBM/2.jpg`,`${url}/IBM/3.jpg`],
                });
                return ;
            case 9 :
                setMyState({
                    company:"Pixelogic",
                    description:"In 2018 I started my journey with Pixelogic as intern in Software Engineering in Test, learned a lot of information about testing field and how to work in Agile environment",
                    durationText:"Duration : 1.5 Years November 2018  - Feb 2020",
                    imagesArray:[`${url}/Pixelogic/1.png`,`${url}/Pixelogic/2.png`,`${url}/Pixelogic/3.png`],
                });
                return ;
            case 10 :
                setMyState({
                    company:"Purple Panda",
                    description:"In 2017 Ibm where providing free courses in Egypt for their Cloud service \"Bluemix\" I applied for it and due to my performance  the instructor offered me an intern at Ibm, After my good performance they decided to let me be assistant instructor for 50 students.",
                    durationText:"Duration : 4 Months March-Current 2020",
                    imagesArray:[`${url}/PurplePanda/1.png`,`${url}/PurplePanda/2.png`,`${url}/PurplePanda/2.png`],
                });
                return ;

        }
    },[props.subMenuKey])
    return (
        <div className={'container'}>
            <div>
                <Carousel autoplay={true}  effect="fade"  >
                    <div>
                        <img style={{width:'100%',height:'200px',objectFit:'cover',objectPosition:'0% 56%'}} src={state ? state.imagesArray[0] : null}/>
                    </div>
                    <div>
                        <img style={{width:'100%',height:'200px',objectFit:'cover',objectPosition:'0% 56%'}} src={state ? state.imagesArray[1] : null}/>
                    </div>
                    <div>
                        <img style={{width:'100%',height:'200px',objectFit:'cover',objectPosition:'0% 56%'}} src={state ? state.imagesArray[2] : null}/>
                    </div>
                </Carousel>
                <div>
                    <h4>{state.durationText}</h4>
                    <p>{state.description}</p>
                </div>
            </div>
        </div>
    )
}
