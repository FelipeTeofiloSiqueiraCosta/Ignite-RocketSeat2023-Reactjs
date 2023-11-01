import styles from "./index.module.css";
import Logo from "../../assets/images/Logo.svg";
export function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Todo logo" title="Todo Logo" />
    </div>
  );
}
