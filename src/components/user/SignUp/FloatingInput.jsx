import React , {useEffect, useState} from 'react';
import {Animated} from "react-animated-css";
import {CSSTransition} from 'react-transition-group';
import PropTypes from "prop-types";

import './FloatingInput.css';
/**
 * Component for Floating Input with animations
 * @component
 * @example
 * const type = 'text'
 * const name = 'Input Value'
 * const value = ''
 * const error = false
 * const empty = false
 * return(
 *   <FloatingInput type ={type} name = {name} value = {value} error = {error} empty = {empty} />
 */

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
    /**
     * save the value in the input box to process it 
     * @param   {event} event that triggered the change
     * @return {void}
     */
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
    /**
     * check if the email is valid or not
     * @param   {string} email  email of the User
     * @return {bool}       Email is valid or not
     */
    function validateEmail(email) {
        var validTest = /\S+@\S+\.\S+/;
        return validTest.test(email);
    }
    //if userPressed submit and box is empty
    useEffect(()=>{
        setShowError(showError || props.empty)
        if(props.empty === true)
        {
            setErrorMsg("Required");
        }
        },[showError,props.empty]);

    //to Apply this After change in second parameters first time , to make the animation and error appear for first time
    // as set State doesn't happen immediaty 
    useEffect(()=> {setErrorAnimate(showError)},[showError]);
    useEffect(()=>{
    setShowError(showError || props.emailExist)
    if(props.emailExist === true)
    {
        setErrorMsg("Email exists");
    }
    },[showError,props.emailExist]);
    //Update Error Msg and Animation if it is false
    /**
     * Update Error Msg and Animation if it is false
     * @param   {string} msg  error msg
     * @return {void}       
     */
    function updateValiation (msg){
       if(showError) {
          setErrorAnimate(showError);
       }
       setErrorMsg(msg);

    }

    //Update error Msg only
     /**
     * Update error Msg only
     * @param   {string} msg  error msg
     * @return {void}       
     */
    function updateMsgOnly(msg){
       setErrorMsg(msg);
    }
     /**
     * Check Validation of the text depending on its type On Blur
     * @return {void}       
     */
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

 FloatingInput.propTypes = {
    /**
     * FloatingInput's type
     */
     type : PropTypes.string.isRequired,
    /**
     * FloatingInput's name to show in the box
     */
     name: PropTypes.string.isRequired,
     /**
     * FloatingInput's value 
     */
      value: PropTypes.string,
     /**
     * FloatingInput's error or valid 
     */
      error: PropTypes.bool,
     /**
     * FloatingInput's empty or not
     */
      empty: PropTypes.bool,
  }

  FloatingInput.defaultProps = { 
  type : 'text',
  name : 'Input Value',
  value : '',
  error : false,
  empty : false,

}


export default FloatingInput;