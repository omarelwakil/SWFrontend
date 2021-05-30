import React , {useState} from 'react';
import FloatingInput from './FloatingInput';
import FloatingInputPassoword from './FloatingInputPassword';
import { Link } from 'react-router-dom';
import axios from 'axios';


import './SignUp.css';


function SignUp(){
  //State of each text box and its error to pass it to the mock server
  const [firstName,setFirstName] = useState('');
  const [firstNameError,setFirstNameError] = useState('true');
  const [lastName,setLastName] = useState('');
  const [lastNameError,setLastNameError] = useState('true');
  const [age,setAge] = useState('');
  const [ageError,setAgeError] = useState('true');
  const [email,setEmail] = useState('');
  const [emailError,setEmailError] = useState('true');
  const [password,setPassword] = useState('');
  const [passwordError,setpassWordError] = useState('true');
  //state for if the email exists
  const [emailExist,setEmailExist] = useState(false);
  const [empty,setEmpty] = useState(false);


  function Submit(event){
    if(!firstNameError&&!lastNameError&&!ageError&&!emailError&&!passwordError){
      //onClick send a request to api
      axios.defaults.baseURL = "https://qasaqees.tech/api";
      const data ={
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName,
        age:age
      };
      axios.post('/register/signUp',data,{headers: {"Content-type": "application/json"}})
          .then((response) => {
              localStorage.setItem("accessToken",response.data.accessToken);
              delete response.data.accessToken;
              console.log(response.data.user);
              localStorage.setItem("userData",JSON.stringify(response.data.user));
              //To check of 
              setTimeout(() => {window.location.href = "/account";}, 2000);
          })
          .catch((error) => {
              if (error.response.status === 403) {
                  console.log(error.response.data.message);
                  setEmailExist(true);
                  setTimeout(() => {setEmailExist(false);}, 500);
              }
          });
    }
    else
    {
       setEmpty(true);
       setTimeout(() => {setEmpty(false);}, 500);
    }
    event.preventDefault();
  }
 
  return (
    <div className="bg-image bg ">
         <div id = "sign-up" className = "container-fluid">
            <form>
                <div id="div-logo" className="col-lg-1 col-md-2 col-3">
                        <Link to="/">
                            <svg viewBox="0 0 204 45" id="icon-flickr_logo_dots">
                                <g fill="none" fillRule="evenodd">
                                    <path fill="#FF0084"
                                        d="M35 33c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.523 4.477 10 10 10">
                                    </path>
                                    <path fill="#0063DC"
                                        d="M10 33c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10S0 17.478 0 23c0 5.523 4.477 10 10 10">
                                    </path>
                                    <path fill="#FFF"
                                        d="M134.725 13.31c3.121 0 5.896.53 8.264 1.691l-.754 7.67c-1.909-1.16-3.809-1.68-6.294-1.68-4.508 0-7.972 3.14-7.972 8.371 0 4.818 4.041 7.96 8.55 7.96 2.368 0 4.736-.522 6.47-1.452l.23 7.79c-2.598.87-5.718 1.34-8.494 1.34-9.933 0-17.5-5.819-17.5-15.818 0-10.06 7.567-15.872 17.5-15.872zm65.756 0c1.21 0 2.483.172 3.52.352l-.519 8.719c-1.155-.352-2.309-.352-3.523-.352-4.852 0-7.57 3.552-7.57 9.483V44.3h-10.39V14.01h9.471v5.582h.112c1.793-3.841 4.394-6.281 8.899-6.281zM157.947.692v26.05h.112l8.666-12.73h11.377l-10.45 13.898 11.316 16.39H166.38l-8.32-15h-.112v15H147.55V.691h10.398zm-59.498 0V44.3H88.051V.691h10.4zm15.49 13.32v30.288h-10.392V14.01h10.392zM78.807 0c2.254 0 3.988.35 5.314.58l-.637 7.21c-.864-.292-1.73-.47-3.293-.47-2.655 0-3.69 1.861-3.69 4.831v1.858h7.391v7.32H76.5V44.3H66.1V21.33h-6.12v-7.32h6.296v-1.858C66.276 3.142 70.491 0 78.807 0zm35.133 1.39v7.68h-10.392V1.39h10.392z">
                                    </path>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <p>Sign up for Flickr</p>
                    <FloatingInput 
                     type ="text"
                     name = "First name"
                     value = {firstName => setFirstName(firstName)} 
                     error = {firstNameError => setFirstNameError(firstNameError)}
                     empty = {empty}
                     />
                     <FloatingInput 
                      type ="text"
                      name = "Last name" 
                      value ={lastName => setLastName(lastName)}
                      error = {lastNameError =>setLastNameError(lastNameError)}
                      empty = {empty}
                     />
                     <FloatingInput 
                      type ="text"
                      name = "Your age" 
                      value ={age => setAge(age)}
                      error = {ageError =>setAgeError(ageError)}
                      empty = {empty}
                     />
                     <FloatingInput 
                       type ="email"
                       name = "Email address" 
                       value ={email => setEmail(email)}
                       error = {emailError =>setEmailError(emailError)}
                       emailExist ={emailExist}
                       empty = {empty}
                      />
                      <FloatingInputPassoword 
                      type ="password"
                      name = "Password" 
                      value = {password => setPassword(password)} 
                      error = {passwordError => setpassWordError(passwordError)}
                      validation = {true}
                      empty = {empty}
                     />
                     <button className ="btn-sign" onClick={Submit}>Sign Up</button>
                     <p className="sign-policy">By signing up, you agree with Flickr's   <a href="/help/terms">Terms of Services</a>  and <a href="/help/privacy">Privacy Policy.</a> </p>
                     <hr></hr>
                     <p className="sign-already-memeber">Already a Flickr member? <a href="/login">Log in here.</a> </p>
              </form>
        </div>
   </div>);

}


export default SignUp;