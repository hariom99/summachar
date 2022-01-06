import "./testing.css"

const Testing = () => {
    const img1 = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
    const img2 = "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80";
    const img3 = "https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg";
    const img4 = "https://cdn.searchenginejournal.com/wp-content/uploads/2018/09/5-critical-seo-considerations-when-optimizing-news-websites-60d33c997608b.png";
    const img5 = "https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    return (
        <div className="carousel"
            data-flickity={'{ "freeScroll": true }'}>
            <div
                style={{ backgroundImage: `url(${img1})` }} className="carousel-cell bg-img-carousel ">

            </div>
            <div
                style={{ backgroundImage: `url(${img2})` }} className="carousel-cell bg-img-carousel ">

            </div>
            <div
                style={{ backgroundImage: `url(${img3})` }} className="carousel-cell bg-img-carousel ">

            </div>
            <div
                style={{ backgroundImage: `url(${img4})` }} className="carousel-cell bg-img-carousel ">

            </div>
            <div
                style={{ backgroundImage: `url(${img5})` }} className="carousel-cell bg-img-carousel ">

            </div>
        </div>

    );
}
export default Testing;