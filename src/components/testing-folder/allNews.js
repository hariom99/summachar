import "./allNews.css"
import { useRef, useState } from "react";
import { connect } from "react-redux";
import Testing from "../news-container/all-news/testing";


const AllNews = (props) => {
    const bg = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/1800x1200_virus_3d_render_red_03_other.jpg";
    const allNews = props.state;
    console.log(allNews);
    const popupRef = useRef(null);
    const [popup, setPopup] = useState(false);

    const handlePopup = () => {
        setPopup(!popup)
    }
    const text = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
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
                {
                    popup && (<>
                        <div onClick={handlePopup} ref={popupRef} className="popup-div" >

                        </div>

                        <div className="p-container" >
                            <div className="popup-news-container" >
                                <div className="popup-card" >
                                    <div className="arrow" >&#10094;</div>
                                    <div className="popup-content" >
                                        <div className="slides" >
                                            {/* {text.map((data, ind) => {
                                                return <div key={ind} className="main" >{data}</div>
                                            })} */}
                                            <div className="main" >
                                                <div className="bg-img-popup-card" style={{ backgroundImage: `url(${bg})` }}  >
                                                    dsvefv
                                                </div>

                                            </div>
                                            <div className="main" >
                                                <div className="bg-img-popup-card" style={{ backgroundImage: `url(${bg})` }}  >
                                                    dsvefv
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="arrow arrow-right-popup" >&#10095;</div>

                                </div>

                            </div>
                        </div>

                        <div className="tab-arrow tab-a" >&#8592;</div>
                        <div className="tab-arrow tab-b" >&#8594;</div>

                    </>)
                }
            </div>

        </div >
    );
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        state
    }
}
export default connect(mapStateToProps)(AllNews);