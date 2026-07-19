import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                {/* <span className="loading loading-spinner loading-lg"></span> */}
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-xl font-semibold">Loading...</p>
                </div>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        />
    );
};

export default PrivateRoute;