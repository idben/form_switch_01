import styles from "@/styles/Form.module.css";
const Form1 = ({loginToRegister, loginToForget, active, show}) => {
  return (
    <div className={`${styles.form} ${styles.form1} ${show?styles.show:""} ${active?styles.active:""}`}>
      <h1>Login</h1>
      <div className="text-end">
        <div className="btn btn-primary btn-switch3 mb-1" onClick={loginToForget}>forget password</div>
        <div className="btn btn-primary btn-switch1" onClick={loginToRegister}>switch to Login</div>
      </div>
    </div>
  );
}

export default Form1;