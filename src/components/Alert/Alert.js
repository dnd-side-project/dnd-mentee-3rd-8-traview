import React from 'react';
import { Link } from 'react-router-dom';
import './Alert.css';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';

const Alert = ({ link, display, icon, message, setAlert }) => {
    return (
        <>
            {display ? (
                <div className="alert">
                    <div className="alert__content">
                        {icon ? (
                            <CheckIcon className="alert__v" />
                        ) : (
                            <CloseIcon className="alert__x" />
                        )}
                        <h1>{message}</h1>
                        {link ? (
                            <Link
                                to={link}
                                className="close"
                                onClick={() => setAlert(false)}
                            >
                                Close
                            </Link>
                        ) : (
                            <div
                                className="close"
                                onClick={() => setAlert(false)}
                            >
                                Close
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

Alert.propTypes = {
    link: PropTypes.string,
    display: PropTypes.bool.isRequired,
    icon: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    setAlert: PropTypes.func.isRequired,
};

export default Alert;
