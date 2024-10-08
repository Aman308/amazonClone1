import Blacklogo from "../../img/blacklogoamazon.png";
import {Divider} from "@mui/material";
import { ToastContainer,toast } from 'react-toastify';
import "../Signup_Signin/sign.css";
import { NavLink } from "react-router-dom";
const Signup=()=>{
    return(
        <section>
            <div className="sign_container">
                <div className="sign_header">
                  <img src={Blacklogo} alt="logo" />   
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Create account</h1>
                        <div className="form_data">
                            <lable htmlfor="name">Name</lable>
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="form_data">
                            <lable htmlfor="email">Email</lable>
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form_data">
                            <lable htmlfor="password">Password</lable>
                            <input type="password" id="password" name="password" placeholder="Enter your password" />
                        </div>
                        <div className="form_data">
                            <lable htmlfor="mobile">Mobile Number</lable>
                            <input type="number" id="mobile" name="mobile" placeholder="Enter your mobile" />
                        </div>

                        <button type="submit" className="signin_btn">Continue</button>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?  <NavLink to="/login" className='text-sm-b'>Login</NavLink></p>
                           
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    )
}

export default Signup;
