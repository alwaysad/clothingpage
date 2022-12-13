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
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
        {isLogin?'Sign in':'Sign up'}   
        </h1>
        <form onSubmit={onSubmitHandler} className="mt-6">
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Email
                </label>
                <input
                    ref={mailRef}
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sm font-semibold text-gray-800"
                >
                    Password
                </label>
                <input
                ref={passwordRef}
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>
           
            <div className="mt-6">
              {isLogin&&<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>}  
               {!isLogin&&<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Create Account
                </button>} 
            </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
           
           
            <a onClick={loginChangeHandler}
                
                className="font-medium text-purple-600 hover:underline"
            >
               {isLogin?'Sign up':'Sign in'} 
            </a>
        </p>
    </div>
</div>
  );
};

export default Auth;
