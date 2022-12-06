import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logIn } from "../store/auth-slice";

const Auth = () => {
  const history=useHistory();
  const mailRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const dispatch=useDispatch();

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

      dispatch(logIn(data.idToken));
      history.replace('/');

    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <h1>{isLogin ? "LOGIN PAGE" : "CREATE PAGE"}</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mail
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             
              required
              ref={mailRef}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
              required
              ref={passwordRef}
            />
          </div>
        </div>
        <button>
          {isLogin ? "Sign in" : "Create account"}
        </button>
        <div>
        <button onClick={loginChangeHandler}>{isLogin?'create new account':'sign with credentials'}</button>
        </div>

     
      </form>
    </section>
  );
};

export default Auth;
