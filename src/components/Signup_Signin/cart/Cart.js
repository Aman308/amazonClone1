import { Divider } from "@mui/material";
import "../cart/Cart1.css"

const Cart=()=>{
    return (
        <div className="cart_section">
            <div className="cart_cotainer">
                <div className="left_cart">
                <img src="https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70"/>
                <div className="cart_btn">
                    <button className="cart_btn1">Add to Cart</button>
                    <button className="cart_btn2">Buy Now</button>
                </div>
                </div>
                <div className="right_cart">
                    <h3>Home & Kitchen</h3>
                    <h4>Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)</h4>
                    <Divider />
                    <p className="mrp">M.R.P : $1195</p>
                    <p>Deal of the Day : <span style={{color:"#B12704"}}>$625.00</span></p>
                    <p>You Save :<span style={{color:"#B12704"}}>$570.00(47%)</span></p>
                    <div className="discount_box">
                        <h5>Discount : <span style={{color:"#111"}}>Extra 10% Off</span> </h5>
                        <h4>Free Delivery : <span style={{color:"#111",fontWeight:600}}>June 2-4</span> Details</h4>
                        <p>Fastest Delivery :<span style={{color:"#111",fontWeight:600}}> Tommarow 11 AM</span></p>
                    </div>
                    <p className="descriptation">About the Item :<span style={{color:"#565959",fontSize:14}}>This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.</span></p>
                
                </div>
            </div>
        </div>
    )
}

export default Cart;