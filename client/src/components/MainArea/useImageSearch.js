import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ROOT, ACCESS_KEY } from '../../const/apiConst';

export default function useImageSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [images, setImages] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setImages([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        axios({
            method: 'GET',
            url: `${API_ROOT}/photos/random?client_id=${ACCESS_KEY}&count=20`,
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res) => {
                console.log('api 호출!!!!');
                setImages((prevImages) => {
                    return [...new Set([...prevImages, ...res.data])];
                });
                // setHasMore(res.data.length > 0)
                setLoading(false);
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;
                setError(true);
            });
        return () => cancel();
    }, [query, pageNumber]);

    return { loading, error, images, hasMore };
}
