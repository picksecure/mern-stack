import Jeep from '../gallery/jeep.webp';
import Jeep1 from '../gallery/jeep1.webp';
import Jeep2 from '../gallery/jeep2.webp';
import Jeep3 from '../gallery/jeep3.webp';
import Jeep4 from '../gallery/jeep4.webp';
import Jeep5 from '../gallery/jeep5.webp';
import Jeep6 from '../gallery/jeep6.webp';
import Jeep7 from '../gallery/jeep7.webp';

const ImageGallery = () => {
    return (
        <div className="container">
            <div className="row text-center text-lg-start mt-5 noSpace">

                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep} alt="" />
                    </div>
                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep1} alt="" />
                    </div>
                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep2} alt="" />
                    </div>
                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep3} alt="" />
                    </div>
                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep4} alt="" />
                    </div>
                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep5} alt="" />
                    </div>
                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep6} alt="" />
                    </div>
                <div className="col-lg-3 col-md-4 col-sm-2 col-6 zoomOnHover">
                        <img className="img-fluid img-thumbnail" src={Jeep7} alt="" />
                    </div>
                
                </div>

        </div>
        )
}

export default ImageGallery;