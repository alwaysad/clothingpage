import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../store/auth-slice";
import { NotificationManager } from "react-notifications";
const Auth = () => {
  const history = useHistory();
  const mailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  const loginChangeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredMail = mailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcG5lQyrpB7SLTTYtGm-VHDIRA66Y4_Ws";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcG5lQyrpB7SLTTYtGm-VHDIRA66Y4_Ws";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredMail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
      });
     
      

      

      const data = await response.json();
      if (!response.ok) {
        throw new Error(`${data.error.message}`);
      }
      // NotificationManager.success('successfully logged in','login');

      dispatch(logIn(data.idToken));
      history.replace("/");
    } catch (error) {
     NotificationManager.error(`${error.message}`,'Error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50">

<div className="flex relative flex-col space-y-10 m-6 md:flex-row md:space-y-0 bg-white shadow-2xl rounded-2xl">
  
<div className="p-6 md:p-20">
  <p className="text-2xl mb-5 font-bold">{isLogin?'Sign in':'Sign up'}</p>
  <p className="mb-10 max-w-sm">{isLogin?'Sign into your account to see beautiful clothes':'Sign up to see beautiful clothes'}</p>
  <input ref={mailRef}  type="text" placeholder="Enter your email adress" className="mb-4 overflow-hidden rounded-lg w-full border px-10 py-4"/>
  <input ref={passwordRef} type="password" placeholder="Enter your password" className="mb-4 overflow-hidden rounded-lg w-full border px-10 py-4"/> 
<div className="flex mt-2 flex-col items-center space-y-4 justify-between md:flex-row md:space-y-0">
  <p>Forgot password</p>
  <button onClick={onSubmitHandler} type="submit" className=" md:w-auto py-6 px-10 w-full rounded-lg border-lg text-white hover:-translate-y-1 duration-150 bg-cyan-600">{isLogin?'Sign in':'Sign up'}</button>
</div>

<div className="border-b-2 mt-8 border-gray "></div>
<p className="my-10 text-center text-gray-500">or log in with</p>

<div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
  <button className="flex items-center space-x-3 justify-center px-10 py-2 border rounded-lg hover:shadow-xl hover:-translate-y-1 duration-200 ">
    <img className="w-10" src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/main/mini-projects/login-modal/images/facebook.png"/>
    <span>Facebook</span>
  </button>
  <button className="flex items-center space-x-3 justify-center px-6 py-2 border rounded-lg hover:shadow-xl hover:-translate-y-1 duration-200">
    <img className="w-10" src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/main/mini-projects/login-modal/images/google.png"/>
    <span>Google</span>
  </button>
  
</div>
{isLogin&&<p className="text-center mt-4">Don't you have an account <a onClick={loginChangeHandler} className="font-bold cursor-pointer">Sign up</a></p>}
{!isLogin&&<p className="text-center mt-4">Already have an account <a onClick={loginChangeHandler} className="font-bold cursor-pointer">Sign in</a></p>}

</div>


 
 
    <img className="w-[430px] hidden md:block " src="https://raw.githubusercontent.com/bradtraversy/tailwind-course-projects/main/mini-projects/login-modal/images/image.jpg"/>

<div
          className="group absolute -top-5 right-4 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black group-hover:text-gray-600"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
</div>

</div>
  );
};

export default Auth;
