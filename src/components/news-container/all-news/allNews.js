import "./allNews.css"
import { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import popupNewsData from "../popup";
import PopupWeb from "./popupWeb";
import Popup from "../../popup-mobile/popup";

const AllNews = (props) => {
    const allNews = props.state;

    const popupRef = useRef(null);
    const carouselRef = useRef(null);
    const [popup, setPopup] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    // window width change
    const [windowWidth, setWindowWidth] = useState(0);
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };
    // window width change


    const handlePopup = () => {

        setPopup(!popup)
        if (!popup) {

            carouselRef.current.style.zIndex = -2;
            popupRef.current.style.zIndex = -2;
        }
        else {
            carouselRef.current.style.zIndex = 4;
            popupRef.current.style.zIndex = 3;

        }
    }
    useEffect(() => {

        if (firstRender === true) {
            handlePopup();
            setPopup(!popup)
            setFirstRender(!firstRender)
        }


        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);


    }, [firstRender, popup, handlePopup]);
    // console.log(window.innerWidth);

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

                            <div key={ind} onClick={() => handlePopup()} className="card" >
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
                <div onClick={() => handlePopup()} className="popup-div-parent" ref={popupRef} >

                </div>
                <div ref={carouselRef}
                    className="popup-container" >
                    {
                        (window.innerWidth <= 500) ? <Popup /> : <>
                            <i className="fa fa-chevron-left left-ic "></i>
                            <PopupWeb news={popupNewsData} />
                            <i className="fa fa-chevron-right right-ic "></i></>
                    }
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