import styles from "@/styles/Side.module.css";
const Side1 = ({active}) => {
  return (
    <div className={`${styles.side} ${styles.side1} ${active?styles.active:""}`}>
    </div>
  );
}

export default Side1;