import { Link } from "react-router-dom";
import MetaComponent from "../../components/MetaComponent";
import paths from "../../router/paths";
import { useEffect, useState } from "react";

const NotFoundComponet = ({ fetchSetting }) => {
    const [setting, setSetting] = useState([]);

    useEffect(() => {
        fetchSetting()
            .then((setting) => setSetting(setting))
            .catch((er) => console.log(er));
    }, [fetchSetting]);
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <MetaComponent
                title={setting.seoHelmentTitleFound}
                description={setting.seoHelmentDescriptionFound}
                name={setting.seoHelmentName}
                type={setting.seoHelmentTypeFound} />
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you're looking for doesn't exist.
                </p>
                <Link to={paths.ROOT} className="btn btn-outline-primary">Go Home</Link>
            </div>
        </div>
        )
}

export default NotFoundComponet;