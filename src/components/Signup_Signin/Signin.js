import Blacklogo from "../../img/blacklogoamazon.png";
import "../Signup_Signin/sign.css";
import { ToastContainer,toast } from 'react-toastify';
const Signin =()=>{
    return(
        <section>
        <div className="sign_container">
            <div className="sign_header">
              <img src={Blacklogo} alt="logo" />   
            </div>
            <div className="sign_form">
                <form>
                    <h1>Sign In</h1>
                   
                    <div className="form_data">
                        <lable htmlfor="email">Email</lable>
                        <input type="email" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="form_data">
                        <lable htmlfor="password">Password</lable>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                    
                    <button type="submit" className="signin_btn">Continue</button>

                    <p>By containue, you agree to <br/>Amezon's Conditions of use and Privacy notice</p>
                    </form>
                    <ToastContainer />
                    </div>
                    <div className="create_accountinfo">
                        <p>New to Amezon</p>
                        <button>Create your amezon account</button>
                    </div>
 
           
        </div>
    </section>
)
}
export default Signin;
