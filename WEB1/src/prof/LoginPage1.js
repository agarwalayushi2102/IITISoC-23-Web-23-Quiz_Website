import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./LoginPage1.css";
const LoginPage1 = () => {
  return (
    <div className="login-page-1">
      <Button className="component-112" variant="primary">
        About us
      </Button>
      <img className="component-2-icon" alt="" src="/component-2@2x.png" />
      <div className="login-page-1-child" />
      <div className="quizzylicious-wrapper" id="name">
        <div className="quizzylicious1">Quizzylicious</div>
      </div>
      <div className="text">{` `}</div>
      <div className="login-page-1-inner">
        <div className="component-child4" />
      </div>
      <div className="login-page-1-item" />
      <div className="login-page-1-child1" />
      <div className="mathematics">MATHEMATICS</div>
      <div className="text1" />
      <div className="physics">PHYSICS</div>
      <div className="chemistry4">CHEMISTRY</div>
      <div className="qoute" id="quote ">
        <img className="qoute-child" alt="" src="/rectangle-9.svg" />
        <div className="try-test-analyse">try test analyse learn</div>
      </div>
      <Button className="frame-button" variant="primary" id="admin ">
        Are you an admin?Login
      </Button>
      <Button className="rectangle-button" variant="primary" id="sgn">
        Sign in
      </Button>
      <Button className="login-page-1-child2" variant="primary" id="login">
        login
      </Button>
      <Button className="contact1" variant="primary" id="cntc">
        contact
      </Button>
    </div>
  );
};

export default LoginPage1;
