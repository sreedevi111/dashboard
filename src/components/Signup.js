import React, {useState} from "react";
import pic from "../assets/Group 3212.svg";
import "./Signup.css";
import Modal from 'react-modal';
import LoginInput from "./LoginInput";


function Signup() {
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }

  return (
    <div className="signup">
      <div className="row-1">
        <img src={pic} alt="" />
        <div className="description">
          <span className="description-title">
            <div className="des-title-row1">
              World
              <span className="orange-color"> Class</span> Learning
            </div>
            For
            <span className="orange-color"> You</span>
          </span>
          <div className="paragraph">
            <p className="signup-para">
              Pursue a promotion, a raise, or switch careers. 89% of learners
              who have taken a course report career benefits.{" "}
            </p>

            <p>Coursera Learner Outcome Survey, India (2021)</p>
            <div className="button-outline" onClick={setModalIsOpenToTrue}>Sign up</div>
            <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <LoginInput />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
