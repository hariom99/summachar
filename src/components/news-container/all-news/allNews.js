import "./allNews.css"
import { useRef, useState } from "react";
import { connect } from "react-redux";
import Testing from "./testing";


const AllNews = (props) => {
    // const bg = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg";
    const allNews = props.state;
    console.log(allNews);
    const popupRef = useRef(null);
    const carouselRef = useRef(null);
    const [popup, setPopup] = useState(false);

    const handlePopup = () => {
        setPopup(!popup)
        if (popup) {
            popupRef.current.style.visibility = "hidden";
            carouselRef.current.style.visibility = "hidden";
        }
        else {
            popupRef.current.style.visibility = "visible";
            carouselRef.current.style.visibility = "visible";
        }
    }
    // const text = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (<>
        <div className="all-news-container" >
            <div className="news-card" >
                <div className="news-card-date" >
                    <span className="news-date" >Today</span>
                    <hr className="hr" />
                </div>
                <div className="card-container" >
                    {allNews.map((news, ind) => {
                        return (

                            <div key={ind} onClick={handlePopup} className="card" >
                                <div className="news-content-container" style={{ backgroundImage: `url(${news.img}) ` }} >
                                    {news.headline}
                                </div>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div >
        {
            <>
                <div onClick={handlePopup} className="popup-div-only" ref={popupRef} >
                </div>
                <div ref={carouselRef} className="popup-div-news" >
                    <div className="carousel-container" >
                        <Testing />
                    </div>
                </div>
            </>
        }
    </>
    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        state
    }
}
export default connect(mapStateToProps)(AllNews);