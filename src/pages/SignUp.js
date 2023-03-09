import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";
import Card from "../components/UI/Card";
import { auth } from "../config/firebase";
let isValid;
//= false;
let checkPassword;
const SignUp = () => {
  const [error, setIsError] = useState("");
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("password");
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  //const [isValid, setIsValid] = useState();
  const togglePassword = () => {
    setType(type === "password" ? "text" : "password");
  };
  const email = emailRef.current.value;
  const userName = userNameRef.current.value;
  const password = passwordRef.current.value;
  const confirmPassword = confirmPasswordRef.current.value;
  const validateForm = () => {
    if (
      email.includes("@") ||
      userName.trim().length < 5 ||
      password.trim().length < 5 ||
      password.trim() !== confirmPassword.trim()
    ) {
      isValid = false;
      return;
    }
    isValid = true;
  };
  const submitForm = async (e) => {
    e.preventDefault();

    validateForm();
    if (isValid === true) {
      return;
    }
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: userName,
      });
      console.log(user.user);
      //console.log(u);
      navigate("/home");
    } catch (e) {
      setIsError(e.message);
      setLoading(false);
      console.log(e.message);
    }
  };

  //   useEffect(() => {
  //     submitForm();
  //   });

  return (
    <Card>
      <form className={classes.form} onSubmit={submitForm}>
        <h2>Sign up</h2>
        <p className={classes.error}>{error}</p>
        <div className={classes["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="user-name">Username</label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            ref={userNameRef}
            required
          />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type={type}
              name="password"
              id="password"
              required
              ref={passwordRef}
            />
            <p onClick={togglePassword} className={classes.toggle}>
              {type === "password" ? "show" : "hide"}
            </p>
          </div>
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <div>
            <input
              required
              type={type}
              name="confirm-password"
              id="confirm-password"
              ref={confirmPasswordRef}
            />
            <p onClick={togglePassword} className={classes.toggle}>
              {type === "password" ? "show" : "hide"}
            </p>
          </div>
          {checkPassword && (
            <p className={classes.error}>Password doesn't match</p>
          )}
        </div>
        {isValid && <p className={classes.error}>Password doesn't match</p>}
        <button type="submit" className={classes.button}>
          Create a free account
          {loading && <div className={classes.spinner}></div>}
        </button>
        <div className={classes.div}>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </Card>
  );
};
export default SignUp;
