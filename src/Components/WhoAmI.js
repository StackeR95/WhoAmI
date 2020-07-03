import React from "react";

export default function () {
return <div>
 <div style={{display:'flex',height:'100%'}}>
     <img alt={"I Am Not Found"} style={{width:'20%',height:'100%',borderRadius:'30%'}} src={`/assets/Me.jpg`} />
<div style={{paddingLeft:10,fontWeight:'bold',width:'50%',textAlign:'justify'}}>
    <p>My Name is Ahmed Adel Zakaria</p>
    <p>Nationality : Egyptian 🇪🇬</p>
    <p>Age : 24 👦</p>
    <p>Work : Software Engineer @<a target={'_blank'} href={'https://www.purplepanda.be/over-ons/'}>PurplePanda</a> </p>
    <p>I graduated from Faculty of Engineering Cairo University 2018, During college i had an Internship in <a target={'_blank'} href={'https://www.ibm.com/eg-en'}>IBM</a> then
        I worked as an assistant instructor for <a target={'_blank'} href={'https://cloud.ibm.com/login'}>IBM Cloud service Bluemix</a> . I also worked in <a target={'_blank'} href={'https://www.marriott.com/hotels/travel/caieg-cairo-marriott-hotel-and-omar-khayyam-casino/'}>Cairo Marriott Hotel</a>  as IT assistant.
        In last year in college i had the opportunity to have internship at <a target={'_blank'} href={'https://pixelogicmedia.com/'}>Pixelogic</a> and after graduation I worked as a Software Engineer for Pixelogic for 1.5 year and now I work for Purple Panda in Antwerp.
        <br/><span> In this website you fill find my cv but why to make a pdf while i can code i make my own website isn't this more reliable for a software engineer 🤷‍♂️.</span>
        <p style={{textAlign:'center',paddingTop:50}}>Last thing here is a coffee for you <span onClick={()=>{console.log('Coffee')}}>☕</span>.</p>
    </p>
</div>
 </div>
</div>
}
