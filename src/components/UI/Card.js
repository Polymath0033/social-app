import classes from "./Card.module.css";
const Card = ({ children }) => {
  return (
    <div className={classes.card}>
      <div className={classes["card-inner"]}>{children}</div>
    </div>
  );
};
export default Card;
