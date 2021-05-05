import React , {useEffect, useState} from 'react';
import {Animated} from "react-animated-css";
import {CSSTransition} from 'react-transition-group';
import PasswordMeter from './PasswordMeter';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

import './FloatingInputPassword.css';

import CheckboxIcon from './CheckBoxIcon';

function FloatingInputPassoword(props){

    //if not used there will be a warinng: findDOMNode
    const nodeRef = React.useRef(null);
    //first blur We won't check for errors so I must Keep track of it
    const [firstBlur, setFirstBlur] = useState(false);
    //State of the Animation of Label if it is Active or not
    const [isActive, setIsActive] = useState(false);
    //State of the Written Text 
    const [text, setText] = useState("");
    //State of Showing Error or not
    const [showError, setShowError] = useState(false);
    //State of Error Msg
    const [errorMsg, setErrorMsg] = useState("");

    //State of Error Animation
    const [errorAnimate, setErrorAnimate] = useState(false);

    //make a change State to indicate a change happened after Blur to keep the error Msg the same
    const [change,setChange] = useState(false);

    //Make Password On focus 
    const [passwordFocus,setPasswordFocue] = useState(false);
    //we will use this to prevent Animation on first Render
    const [animatePassword,setAnimatedPassword] = useState(false);
    //two states for validation Tests to render check box if it passed or not
    const [firstTest,setFirstTest] = useState(false);
    const [secondTest,setSecondTest] = useState(false);
    //State for the password meter
    const [widthPM,setWidthPM] = useState('');
    const [backgroundPM,setBackgroundPM] = useState('');
    //Password Visiablity 
    const [visibleP,setVisibleP] = useState(false);
     //toggle on Focus
    function onFocusPassword(){
        setPasswordFocue(true);
        setAnimatedPassword(true);
        updateCheckBox();
        setBackgroundPM('#128fdc');
    }
    
    //this function update the check box
    function updateCheckBox(){
        if (!noLeadingSpace(text) && text.length > 12) {
            setFirstTest(true);
            setSecondTest(false);
            setWidthPM("50%");
        }else if (text.length < 12 && noLeadingSpace(text)) {
            setFirstTest(false);
            setSecondTest(true);
            setWidthPM("50%");
        }
        else if (text.length < 12 && !noLeadingSpace(text)) {
            setFirstTest(false);
            setSecondTest(false);
            setWidthPM("0");
        }else if (noLeadingSpace(text) &&text.length > 12) {
            setFirstTest(true);
            setSecondTest(true);
            // setPasswordFocue(false);
            setShowError(false);
            props.error(false);
            setWidthPM("100%");
           
        }
    }
    //Keep the state of text input and indicates that first clicked happened
    function handleTextChange(event){
        const {value} = event.target
        setText(value);
        setChange(true);
        props.value(value);
        if(value !== "") {
            setFirstBlur(true);
            setIsActive(true);
            setPasswordFocue(true);
            updateCheckBox();
               
        } else {
            setIsActive(false);
            setWidthPM("0%");
            
        }
        
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

    //No leading Space condition in password
    function noLeadingSpace(pass){
        var validTest = /^[^-\s][a-zA-Z0-9_\s-]+/;
        return validTest.test(pass);
    }

    //Update error Msg only
    function updateMsgOnly(msg){
       setErrorMsg(msg);
    }
    function textValiation() {
        //Check Validation On Blur
        //this means the user click one time and changed the value if he just clicked we won't check for validation
        setPasswordFocue(false);
        if(firstBlur === true && change === true)
        {   
            //Password Validation
            setChange(false);
            if (text === "" ) {
                if(errorMsg !== "Required"){
                    setShowError(true);
                    props.error(true);
                    setErrorAnimate(false);
                    setBackgroundPM('#e2292b');
                    //Wait to apply the animation then change the error msg 
                    if(errorMsg !== "" ) {
                     setTimeout(() => {updateValiation("Required")},1100);
                    } else {
                     setErrorMsg("Required");
                    }
                }
            } else if (!noLeadingSpace(text) && text.length > 12) {
                setFirstTest(true);
                setSecondTest(false);
                setShowError(true);
                props.error(true);
                setErrorAnimate(false);
                setBackgroundPM('#e2292b');
                //Wait to apply the animation then change the error msg 
                if(errorMsg !== "") {
                 setTimeout(() => {updateValiation("Invalid password")},1100);
                } else {
                  setErrorMsg("Invalid password");
                }
            }else if (text.length < 12 && noLeadingSpace(text)) {
                setFirstTest(false);
                setSecondTest(true);
                setShowError(true);
                props.error(true);
                setErrorAnimate(false);
                setBackgroundPM('#e2292b');
                //Wait to apply the animation then change the error msg 
                if(errorMsg !== "") {
                 setTimeout(() => {updateValiation("Invalid password")},1100);
                } else {
                  setErrorMsg("Invalid password");
                }
            } else if (text.length < 12 && !noLeadingSpace(text)) {
                setFirstTest(false);
                setSecondTest(false);
                setShowError(true);
                props.error(true);
                setErrorAnimate(false);
                setBackgroundPM('#e2292b');
                //Wait to apply the animation then change the error msg 
                if(errorMsg !== "") {
                 setTimeout(() => {updateValiation("Invalid password")},1100);
                } else {
                  setErrorMsg("Invalid password");
                }
            }else if (noLeadingSpace(text) &&text.length > 12) {
                setFirstTest(true);
                setSecondTest(true);
                setShowError(false);
                props.error(false);
                setErrorAnimate(showError);
                setTimeout(() => {updateMsgOnly("")},1100); 
            }
        }
    }
    return (
        <div id="float-label">

            <div className ="div-input">
                <input type={visibleP ?"text" :props.type} value = {text} onChange = {handleTextChange} onBlur={textValiation} onFocus={onFocusPassword} className={showError&&!passwordFocus ?"error-input" :""}/>
                <div className="password-meter" style={passwordFocus ? {visibility:'visible'}:{visibility:'hidden'}}>
                    <PasswordMeter width={widthPM} bg = {backgroundPM} />
                </div>
            </div>
            <label className = {isActive ? (showError&&!passwordFocus ? "Active error-label" : "Active") : (showError&&!passwordFocus ? "error-label" : "") } htmlFor={props.type} >
                {props.name}
                </label> 
            <div className={"visible-icon-container"}>
              {visibleP ? 
              <VisibilityIcon className={passwordFocus ? ("icon-active visible-icons") : (showError ? "error-label visible-icons" : "visible-icons")} onClick={()=>{setVisibleP(!visibleP)}} /> : 
              <VisibilityOffIcon  className={passwordFocus ? ("icon-active visible-icons") : (showError ? "error-label visible-icons" : "visible-icons")} onClick={()=>{setVisibleP(!visibleP)}} />}
            </div>
            <CSSTransition in = {errorAnimate} enter = {errorAnimate} timeout = {1100} unmountOnExit = {errorAnimate} classNames = "slide" nodeRef = {nodeRef}>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={errorAnimate} animationOutDuration= {1500} >
                        <div className = {"error-msg"} ref = {nodeRef}>
                            {errorMsg}
                        </div>
                    </Animated>
            </CSSTransition>
             <CSSTransition in = {passwordFocus} enter = {passwordFocus} timeout = {900} unmountOnExit = {passwordFocus} classNames = "slidePassword" nodeRef = {nodeRef}>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={passwordFocus} animationOutDuration= {1500} >
                        <div className = {"password-tests"} ref = {nodeRef}>
                           {animatePassword && <div className={"password-tests"}> 
                                <p>Please use at least:</p>
                                <span><CheckboxIcon checked={firstTest} className={"icon-checkbox"} onClick={()=>{}}/>12 Characters </span>
                                <span className={"right-test icon-checkbox"}> <CheckboxIcon checked={secondTest} onClick={()=>{}} /> No leading spaces</span>
                            </div>}
                        </div>
                    </Animated>
             </CSSTransition>
        </div>
    );
}

export default FloatingInputPassoword;