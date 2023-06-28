import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.welcomeToQuizzylicious}>
        WELCOME TO QUIZZYLICIOUS!
      </div>
      <div className={styles.homePageChild} />
      <Button className={styles.component1} variant="primary" id="pysics">
        PHYSICS
      </Button>
      <Button className={styles.component3} variant="primary" id="chmstry">
        CHEMISTRY
      </Button>
      <Button className={styles.component4} variant="primary" id="maths ">
        MATHS
      </Button>
      <div className={styles.homePageItem} />
      <i className={styles.trendingTopics}>TRENDING TOPICS!</i>
      <img className={styles.homePageInner} alt="" src="/rectangle-18@2x.png" />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-21@2x.png" />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.homePageChild1}
        alt=""
        src="/rectangle-24@2x.png"
      />
      <img
        className={styles.homePageChild2}
        alt=""
        src="/rectangle-25@2x.png"
      />
      <img
        className={styles.homePageChild3}
        alt=""
        src="/rectangle-26@2x.png"
      />
      <div className={styles.component6}>
        <img
          className={styles.component6Child}
          alt=""
          src="/ellipse-2@2x.png"
        />
        <img
          className={styles.component6Item}
          alt=""
          src="/rectangle-15@2x.png"
        />
        <div className={styles.profile} />
        <img
          className={styles.component6Item}
          alt=""
          src="/rectangle-15@2x.png"
        />
      </div>
      <img
        className={styles.homePageChild4}
        alt=""
        src="/rectangle-131@2x.png"
      />
      <img
        className={styles.homePageChild5}
        alt=""
        src="/rectangle-132@2x.png"
      />
    </div>
  );
};

export default HomePage;
