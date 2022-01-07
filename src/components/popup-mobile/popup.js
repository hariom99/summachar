import { useRef } from "react";
import "./pupup.css";

const Popup = () => {
    const radio1Ref = useRef();
    const radio2Ref = useRef();
    const radio3Ref = useRef();
    let currentCard = 0;
    let startPos = 0;
    let endPos = 0;
    const getRadioRef = (e) => {
        // console.log(e.target);
        // console.log(ref.current);
    }
    // console.log(radio1Ref.current);
    const touchStart = (e) => {


        // console.log(radio2Ref.current.checked = true);
        // console.log(radio2Ref.current.checked);

        startPos = e.touches[0].clientX;
        // console.log(e.touches[0]);
        // console.log(startPos);
        // console.log("touch start");
    }
    const touchEnd = (e) => {
        //on swipe to left
        if (startPos - endPos > 0 && endPos !== 0) {
            currentCard++;
            if (currentCard > 3)
                currentCard = 3
            if (currentCard === 0) {
                radio1Ref.current.checked = true
                radio2Ref.current.checked = false
                radio3Ref.current.checked = false
            }
            else if (currentCard === 1) {
                radio2Ref.current.checked = true
                radio3Ref.current.checked = false
                radio1Ref.current.checked = false
            }
            else if (currentCard === 2) {
                radio3Ref.current.checked = true
                radio2Ref.current.checked = false
                radio1Ref.current.checked = false
            }

        }
        // on swipe to right
        else if (startPos - endPos < 0 && endPos !== 0) {
            currentCard--;
            if (currentCard < 0)
                currentCard = 0;
            if (currentCard === 0) {
                radio1Ref.current.checked = true
                radio2Ref.current.checked = false
                radio3Ref.current.checked = false
            }
            else if (currentCard === 1) {
                radio2Ref.current.checked = true
                radio3Ref.current.checked = false
                radio1Ref.current.checked = false
            }
            else if (currentCard === 2) {
                radio3Ref.current.checked = true
                radio2Ref.current.checked = false
                radio1Ref.current.checked = false
            }

            // console.log("swiped to right " + startPos + " " + endPos);
        }
    }
    const touchMove = (e) => {
        endPos = e.touches[0].clientX;
        // console.log(startPos - endPos);
    }

    return (
        <div className="slider" >


            <div className="mannual-nav" >
                <label className="manual-btn" htmlFor="r1">
                </label>
                <label className="manual-btn" htmlFor="r2">
                </label>
                <label className="manual-btn" htmlFor="r3">
                </label>
            </div>
            <div onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} className="slides">

                <input onClick={getRadioRef} ref={radio1Ref} type="radio" className="manual-btn" name="radio-btn" id="r1" />
                <input onClick={getRadioRef} ref={radio2Ref} type="radio" name="radio-btn" id="r2" />
                <input onClick={getRadioRef} ref={radio3Ref} type="radio" name="radio-btn" id="r3" />


                <div className="slide first">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="img" />
                </div>
                <div className="slide" >
                    <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="img" />
                </div>
                <div className="slide">
                    <img src="https://cdn.theatlantic.com/media/img/photo/2018/10/images-of-the-season-fall-is-in-the/f02_RTX6EJJJ-1/original.jpg" alt="img" />
                </div>
                <i className=" pop-icons fa  fa-heart"></i>
                <i className=" pop-iconc fa  fa-comment"></i>
                <i className=" pop-iconsh fa  fa-share-alt"></i>
                <i className=" pop-icone fa fa-arrows-alt"></i>
            </div>
        </div>
    );
}
export default Popup;