import React, { useEffect, useState } from 'react';
import { KakaoMapAPI } from '../../../const/apiConst';
import DetailPage from '../DetailPage';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';
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
    const onClickToNev = () => {
        window.open(
            `https://map.kakao.com/link/to/Hello World!,${props.Latitude},${props.longitude}`
        );
    };
    const onClickToMap = () => {
        window.open(
            `https://map.kakao.com/link/map/Hello World!,${props.Latitude},${props.longitude}`
        );
    };
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                boxSizing: 'border-box',
                border: '3px solid #FFFFFF',
            }}
        >
            <div
                id={'staticMap'}
                style={{ width: '100%', height: '65%', borderRadius: '16px' }}
            />
            <div style={{ width: '100%', height: '65%', borderRadius: '16px' }}>
                <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="text primary button group"
                    fullWidth={true}
                >
                    <Button onClick={onClickToMap}>카카오맵</Button>
                    <Button onClick={onClickToNev}>카카오네비</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default KakaoMap;
