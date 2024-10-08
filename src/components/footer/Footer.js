//footer.js
import Logo from "../../img/logo.png";
import "../footer/footer.css";
const Footer =()=>{
    return (
        <footer>
            <div className="footer_container">
            <div className="footr_details_one">
            <h3>Get to know us</h3>    
                <p>about us</p>
                <p>Careers</p>
                <p>Press relasees</p>
                <p>Amezon Science</p>
            </div>  
            <div className="footr_details_one">
            <h3>Contact with us</h3>    
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div> 
            <div className="footr_details_one">
            <h3>Make money with us</h3>    
                <p>Sell on Amezon</p>
                <p>Sell under amezon accelerator</p>
                <p>project and build your brand</p>
                <p>Amezon globe setting</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
            </div>  

             <div className="footr_details_one">
            <h3>Lets up help you</h3>    
                <p>Returns Centre</p>
                <p>Recalls and Product Safety Alerts</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Help</p>
            </div>       
            </div>
            <div className="lastdetails">
            <img src={Logo} alt="logo"/>

            <p>Conditions of use and sale
            &nbsp;&nbsp;&nbsp;&nbsp; Privacy Notice
            &nbsp;&nbsp;&nbsp;&nbsp; Intrest based ads
            &nbsp;&nbsp;&nbsp;&nbsp; A@ 1196-2024
            &nbsp;&nbsp;&nbsp;&nbsp; Amezon.com, INC or its aritificate
            </p>
            </div>
        </footer>
    )

}
export default Footer;