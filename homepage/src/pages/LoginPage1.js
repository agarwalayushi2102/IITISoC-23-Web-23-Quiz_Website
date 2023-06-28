import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./LoginPage1.module.css";
const LoginPage1 = () => {
  return (
    <div className={styles.loginPage1}>
      <Button className={styles.component1} variant="primary">
        About us
      </Button>
      <img className={styles.component2Icon} alt="" src="/component-2@2x.png" />
      <div className={styles.loginPage1Child} />
      <div className={styles.quizzyliciousWrapper} id="name">
        <div className={styles.quizzylicious}>Quizzylicious</div>
      </div>
      <div className={styles.text}>{` `}</div>
      <div className={styles.loginPage1Inner}>
        <div className={styles.componentChild} />
      </div>
      <div className={styles.loginPage1Item} />
      <div className={styles.rectangleDiv} />
      <div className={styles.mathematics}>MATHEMATICS</div>
      <div className={styles.text1} />
      <div className={styles.physics}>PHYSICS</div>
      <div className={styles.chemistry}>CHEMISTRY</div>
      <div className={styles.qoute} id="quote ">
        <img className={styles.qouteChild} alt="" src="/rectangle-9.svg" />
        <div className={styles.tryTestAnalyse}>try test analyse learn</div>
      </div>
      <Button className={styles.frameButton} variant="primary" id="admin ">
        Are you an admin?Login
      </Button>
      <Button className={styles.rectangleButton} variant="primary" id="sgn">
        Sign in
      </Button>
      <Button className={styles.loginPage1Child1} variant="primary" id="login">
        login
      </Button>
      <Button className={styles.contact} variant="primary" id="cntc">
        contact
      </Button>
    </div>
  );
};

export default LoginPage1;
