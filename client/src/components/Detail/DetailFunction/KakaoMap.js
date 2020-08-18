import React, { useEffect, useState } from 'react';
import {KakaoMapAPI} from "../../../const/apiConst";
import DetailPage from "../DetailPage";

const { kakao } = window;

const KakaoMap = (props) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KakaoMapAPI}&libraries=services,clusterer,drawing`;
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                // 이미지 지도에 표시할 마커입니다
                // 이미지 지도에 표시할 마커를 아래와 같이 배열로 넣어주면 여러개의 마커를 표시할 수 있습니다
                var markers = [
                    {
                        position: new kakao.maps.LatLng(
                            props.Latitude,
                            props.longitude
                        ),
                        text: '부산경치맛집', // text 옵션을 설정하면 마커 위에 텍스트를 함께 표시할 수 있습니다
                    },
                ];

                var staticMapContainer = document.getElementById('staticMap'), // 이미지 지도를 표시할 div
                    staticMapOption = {
                        center: new kakao.maps.LatLng(
                            props.Latitude,
                            props.longitude
                        ), // 이미지 지도의 중심좌표
                        level: 4, // 이미지 지도의 확대 레벨
                        marker: markers, // 이미지 지도에 표시할 마커
                    };

                // 이미지 지도를 생성합니다
                var staticMap = new kakao.maps.StaticMap(
                    staticMapContainer,
                    staticMapOption
                );
            });
        };
    }, []);

    return (
        <div
            id={'staticMap'}
            style={{ width: '320px', height: '80px', borderRadius: '16px' }}
        ></div>
    );
};

export default KakaoMap;
