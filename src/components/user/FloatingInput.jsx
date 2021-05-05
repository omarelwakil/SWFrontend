import React , {useEffect, useState} from 'react';
import {Animated} from "react-animated-css";
import {CSSTransition} from 'react-transition-group';


import './FloatingInput.css';

function FloatingInput(props){

    //if not used there will be a warinng: findDOMNode
    const nodeRef = React.useRef(null);
    //first blur We won't check for errors so I must Keep track of it
    const [firstBlur, setFirstBlur] = useState(false);
    //State of the Animation  if it is Active or not
    const [isActive, setIsActive] = useState(false);
    //State of the Written Text 
    const [text, setText] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [errorAnimate, setErrorAnimate] = useState(false);

    //make a change State to indicate a change happened after Blur to keep the error Msg the same
    const [change,setChange] = useState(false);
    
    //Keep the state of text input and indicates that first clicked happened
    function handleTextChange(event){
        const {value} = event.target
        setChange(true);
        if(value !== "") {
            setFirstBlur(true);
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        if(props.name === "Your age")
        {
            const reg = /^[0-9\b]+$/;
            if(value === '' || reg.test(value))
            {
                
                setText(value.slice(0,3));
                props.value(value.slice(0,3));
            }
        }else
        {
            setText(value);
            props.value(value);
            
        }
    }

    //testing agaist anystring@anystring.anystring just like website
    function validateEmail(email) {
        var validTest = /\S+@\S+\.\S+/;
        return validTest.test(email);
    }

    //to Apply this After change in second parameters first time , to make the animation and error appear for first time
    // as set State doesn't happen immediaty 
    useEffect(()=> {setErrorAnimate(showError)},[showError]);
    //Update Error Msg and Animation if it is false
    function updateValiation (msg){
       if(showError) {
          setErrorAnimate(showError);
       }
       setErrorMsg(msg);

    }

    //Update error Msg only
    function updateMsgOnly(msg){
       setErrorMsg(msg);
    }
  
    function textValiation() {
        //Check Validation On Blur
        //this means the user click one time and changed the value if he just clicked we won't check for validation
        if(firstBlur === true && change === true)
        {   
            //Email Validation
           setChange(false);
           if (props.type === "email") {
                if (text === "") {
                    if(errorMsg !== "Required"){
                        setShowError(true);
                        props.error(true);
                        setErrorAnimate(false);
                        //Wait to apply the animation then change the error msg 
                        if(errorMsg !== "" ) {
                         setTimeout(() => {updateValiation("Required")},1100);
                        } else {
                         setErrorMsg("Required");
                        }
                    }
                 }
                else if(!validateEmail(text) && errorMsg !== "Invalid email") {
                   setShowError(true);
                   props.error(true);
                   setErrorAnimate(false);
                   //Wait to apply the animation then change the error msg 
                   if(errorMsg !== "") {
                    setTimeout(() => {updateValiation("Invalid email")},1100);
                   } else {
                     setErrorMsg("Invalid email");
                   }
                }
                else if(validateEmail(text)) {
                   setShowError(false);
                   props.error(false);
                   setErrorAnimate(showError);
                   setTimeout(() => {updateMsgOnly("")},1100);

                }
                //Age Validing
             } else if (props.name === "Your age") {
                if (text === "") {
                    if(errorMsg !== "Required"){
                        setShowError(true);
                        props.error(true);
                        setErrorAnimate(false);
                        //Wait to apply the animation then change the error msg 
                        if(errorMsg !== "" ) {
                         setTimeout(() => {updateValiation("Required")},1100);
                        } else {
                         setErrorMsg("Required");
                        }
                    }
                 }
                 else if(text > 120 && errorMsg !== "Invalid age") {
                   setShowError(true);
                   props.error(true);
                   setErrorAnimate(false);
                   //Wait to apply the animation then change the error msg 
                   if(errorMsg !== "") {
                    setTimeout(() => {updateValiation("Invalid age")},1100);
                   } else {
                     setErrorMsg("Invalid age");
                   }
                }
                else if(text < 13 && errorMsg !== "In order to use Flicker, you must be 13 or older") {
                    setShowError(true);
                    props.error(true);
                    setErrorAnimate(false);
                    //Wait to apply the animation then change the error msg 
                    if(errorMsg !== "") {
                     setTimeout(() => {updateValiation("In order to use Flicker, you must be 13 or older")},1100);
                    } else {
                      setErrorMsg("In order to use Flicker, you must be 13 or older");
                    }
                 } else if(text <= 120 && text >= 13) {
                    setShowError(false);
                    props.error(false);
                    setErrorAnimate(showError);
                    setTimeout(() => {updateMsgOnly("")},1100); 
                 }
            } else {
                if (text === "" && errorMsg !=="Required") {
                    setShowError(true);
                    props.error(true);
                    setErrorAnimate(false);
                    //Wait to apply the animation then change the error msg 
                    if(errorMsg !== "" ) {
                     setTimeout(() => {updateValiation("Required")},1100);
                    } else {
                     setErrorMsg("Required");
                    }
                  } else if (text !=="") {
                    setShowError(false);
                    props.error(false);
                    setErrorAnimate(showError);
                    setTimeout(() => {updateMsgOnly("")},1100); 
                  }
            }     
        }
    }

    return (
        <div id="float-label">
            <input type={props.type} value = {text} onChange = {handleTextChange} onBlur={textValiation} className={showError ?"error-input" :""}/>
            <label className = {isActive ? (showError ? "Active error-label" : "Active") : (showError ? "error-label" : "") } htmlFor={props.type} >
            {props.name}
            </label> 
            <CSSTransition in = {errorAnimate} enter = {errorAnimate} timeout = {1100} unmountOnExit = {errorAnimate} classNames = "slide" nodeRef = {nodeRef}>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={errorAnimate} animationOutDuration= {1500} >
                        <div className = {"error-msg"} ref = {nodeRef}>
                            {errorMsg}
                        </div>
                    </Animated>
            </CSSTransition>
        </div>
    );
}

export default FloatingInput;