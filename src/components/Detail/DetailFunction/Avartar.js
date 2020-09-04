import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
function Avartar(props) {
    const [detailuser, setDetailUser] = useState(null);
    useEffect(() => {
        db.collection('users')
            .doc(props.uid)
            .get()
            .then((doc) => {
                setDetailUser(doc.data().photoURL);
            });
    }, []);
    if (props.Type === 'Detail') {
        return (
            <img
                style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '40px',
                    objectFit: 'cover',
                    marginBottom: '3px',
                    border: '1px solid #F534B',
                    boxSizing: 'border-box',
                    marginRight: '9px',
                }}
                src={detailuser}
                alt="Avartarimage"
            />
        );
    } else if (props.Type === 'Best') {
        return (
            <img
                style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '14px',
                    objectFit: 'cover',
                    marginBottom: '3px',
                }}
                src={detailuser}
                alt="Avartarimage"
            />
        );
    } else if (props.Type === 'MainArea') {
        return (
            <img
                style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '22px',
                    objectFit: 'cover',
                    marginBottom: '3px',
                }}
                src={detailuser}
                alt="Avartarimage"
            />
        );
    } else if (props.Type === 'comment') {
        return (
            <img
                style={{
                    borderRadius: '20px',
                    width: '40px',
                    height: '40px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    marginRight: '20px',
                }}
                src={detailuser}
                alt=""
            />
        );
    }
}

export default Avartar;
