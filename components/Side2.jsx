import styles from "@/styles/Side.module.css";
const Side2 = ({active}) => {
  return (
    <div className={`${styles.side} ${styles.side2} ${active?styles.active:""}`}>
    </div>
  );
}

export default Side2;