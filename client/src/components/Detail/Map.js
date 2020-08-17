import React, { useEffect, useState } from 'react';

//437988abfa77c2e8be54e8f54cb601a1                 apo
const { kakao } = window;

const SearchMap = (props) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src =
            '//dapi.kakao.com/v2/maps/sdk.js?appkey=b99c6a9c12762f0b805a472f9d5f161d&libraries=services,clusterer,drawing';
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                // 이미지 지도에서 마커가 표시될 위치입니다
                var markerPosition = new kakao.maps.LatLng(
                    33.450701,
                    126.570667
                );

                // 이미지 지도에 표시할 마커입니다
                // 이미지 지도에 표시할 마커는 Object 형태입니다
                var marker = {
                    position: markerPosition,
                };

                var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
                    staticMapOption = {
                        center: new kakao.maps.LatLng(33.450701, 126.570667), // 이미지 지도의 중심좌표
                        level: 3, // 이미지 지도의 확대 레벨
                        marker: marker, // 이미지 지도에 표시할 마커
                    };

                // 이미지 지도를 생성합니다
                var staticMap = new kakao.maps.StaticMap(
                    staticMapContainer,
                    staticMapOption
                );
            });
        };
    }, []);

    return <div id={'map'} style={{ width: 700, height: 700 }}></div>;
};

export default SearchMap;
