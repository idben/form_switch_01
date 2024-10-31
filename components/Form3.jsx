import styles from "@/styles/Form.module.css";
const Form3 = ({forgetToLogin, active, show}) => {
  return (
    <div className={`${styles.form} ${styles.form3} ${show?styles.show:""} ${active?styles.active:""}`}>
      <h1>Forget Password</h1>
      <div className="btn btn-primary btn-switch4" onClick={forgetToLogin}>switch to Login</div>
    </div>
  );
}

export default Form3;