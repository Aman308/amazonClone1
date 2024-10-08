const Right=()=>{
    return(
        <div className="right_buy">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop" />
            <div className="cost_right">
                <p>Your order Eligible for Free Delivery</p><br/>
                <span style={{color:"#565959"}}>Select this option at checkout details</span>
                <h3>Subtotal (1 item) : <span style={{fontWeight:700}}>$4049.00</span></h3>
                <button className="rightBtn">Process to Buy</button>
            </div>
        </div>
    )
}

export default Right;