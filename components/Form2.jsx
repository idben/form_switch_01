import styles from "@/styles/Form.module.css";
const Form2 = ({registerToLogin, active, show}) => {
  return (
    <div className={`${styles.form} ${styles.form2} ${show?styles.show:""} ${active?styles.active:""}`}>
      <h1>Register</h1>
      <div className="btn btn-primary btn-switch2" onClick={registerToLogin}>switch to register</div>
    </div>
  );
}

export default Form2;