import Banner from './Banner';
import "../home.css";
import Slide from './Slide';
const MainCompt=()=>{
    return (
        <div className="home_section">
            <div className="banner_part">
            <Banner />
            </div>
            <div className='slide_part'>
            <div className='left_slide'>
                <Slide title="Deals of the Day"></Slide>
            </div>
            <div className='right_slide'>
                <h4>Leastest deal of the day</h4>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/nikita/1/1/Samsung_Mi_PC_CC_379x304._SY304_CB562051643_.jpg' alt="img" />

            </div>
            </div>
            <Slide title="Above 50% discount"> </Slide>
            <Slide title="Best in electronics"> </Slide>
            <div className="banner_part">
            <Banner />
            </div>
            <Slide title="Todays deal"> </Slide>
            <Slide title="Best seller"> </Slide>
        </div>
    )
}

export default MainCompt;

