import { Link } from "react-router-dom";
import classes from "./Auth.module.css";
import Card from "../components/UI/Card";
const Login = () => {
  return (
    <Card>
      <form className={classes.form}>
        <h2>Login</h2>
        <div className={classes["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <div>
            <input type="password" name="password" id="password" />
            <p className={classes.toggle}>show</p>
          </div>
        </div>
        <Link className={classes.link} to="reset-password">
          Forget password
        </Link>
        <button type="submit" className={classes.button}>
          Login
          {/* <div className={classes.spinner}></div> */}
        </button>
      </form>
      <div className={classes.div}>
        <p>
          Not have account yet <Link to="/sign-up">SignUp</Link>
        </p>
      </div>
    </Card>
  );
};
export default Login;
