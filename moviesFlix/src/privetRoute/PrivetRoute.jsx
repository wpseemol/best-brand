import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/loading/Loading';

const PrivetRoute = ({ children }) => {
    const loginRegInfo = useContext(AuthContext);
    const { user, loading } = loginRegInfo || {};

    const location = useLocation();

    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/account" />;
};

export default PrivetRoute;

PrivetRoute.propTypes = {
    children: PropTypes.node,
};
