import "./popupWeb.css"

const PopupWeb = (props) => {

    // console.log(props.news);
    return (
        (props === undefined) ? null :
            <div className="carousel"
                data-flickity={'{ "freeScroll": false }'}>

                {props.news.map((news, ind) => {
                    return (
                        <div key={ind} style={{ backgroundImage: `url(${news.img})` }} className="carousel-cell bg-img-carousel ">

                        </div>
                    )
                })}




            </div>

    );
}
export default PopupWeb;