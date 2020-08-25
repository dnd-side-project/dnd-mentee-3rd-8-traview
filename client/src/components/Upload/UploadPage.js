import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Address from './UploadFunction/Address';
import {
    TotalContainer,
    UploadDropZone,
    RightContainer,
    TitleInputBar,
    AdvertisementComponent,
    AtmosphereComponent,
    LocationComponent,
    RatingComponent,
} from './UploadStyled';
import Dropzone from './UploadFunction/Dropzone';
import TitleName from './UploadFunction/TitleName';
import Advertisement from './UploadFunction/advertisement';
import Atmosphere from './UploadFunction/Atmosphere';
import Rating from './UploadFunction/Rating';
import Button from '@material-ui/core/Button';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import axios from 'axios';
import Projection from 'proj4';
import { extraApi } from '../../api_manager';

let isSearching = false;
let isEndReached = false;
let currentPage = 1;

export default function UploadPage(props) {
    const [isClicked, setIsClicked] = useState(false);
    let [locations, setLocations] = useState([]);
    const [hasSelectedAddress, setHasSelectedAddress] = useState(false);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [address, setAddress] = useState('');

    const [hasSelectedadvertisement, setHasSelectedadvertisement] = useState(
        false
    ); //광고여부
    const [hadAtmophere, setHadAtmophere] = useState(''); //분위기
    const [hadRating, setHadRating] = useState(''); //레이팅
    const [hadTitlename, setHadTitlename] = useState(''); //제목명
    const [hadReview, setHadReview] = useState(''); //상세내용

    useEffect(() => {
        resetSearchLocation();
    }, []);

    const onHandleUpload = () => {
        console.log('위도경도 : ', latitude, longitude);
        console.log('광고표시 :', hasSelectedadvertisement);
        console.log('분위기 : ', hadAtmophere);
        console.log('이미지좌표: ');
        console.log('평점: ', hadRating);
        console.log('타이틀명: ', hadTitlename);
        console.log('리뷰내용', hadReview);
    };

    const searchLocation = (reset = false) => {
        if (isSearching || isEndReached || !address) {
            return;
        }
        isSearching = true;
        extraApi
            .get('http://www.juso.go.kr/addrlink/addrLinkApi.do', {
                confmKey: 'U01TX0FVVEgyMDE5MDQxOTEzMTUyNDEwODY2NjA=',
                keyword: address,
                resultType: 'json',
                currentPage: currentPage,
            })
            .then((res) => {
                // console.log('searchLocation function res', res);
                if (!res.data.results.juso) {
                    alert(res.data.results.common.errorMessage);
                    isSearching = false;
                    return;
                }

                let total = parseInt(res.data.results.common.totalCount);
                let countPerPage = parseInt(
                    res.data.results.common.countPerPage
                );
                if (total - countPerPage * currentPage < countPerPage) {
                    isEndReached = true;
                }
                currentPage += 1;
                isSearching = false;
                if (reset) {
                    setLocations(res.data.results.juso);
                } else {
                    setLocations(locations.concat(res.data.results.juso));
                }
            });
        // .catch((e) => {
        //     console.log(e);
        // });
    };

    const onLocationSelect = (location) => {
        let data = Object.assign(location, {
            resultType: 'json',
            confmKey: 'U01TX0FVVEgyMDE5MDQxOTE1MjMxNjEwODY2Nzg=',
        });
        extraApi
            .get('http://www.juso.go.kr/addrlink/addrCoordApi.do', data)
            .then((res) => {
                //   console.log(res);
                if (!res.data.results.juso) {
                    alert(res.data.results.common.errorMessage);
                    return;
                }
                let result = res.data.results.juso[0];
                const x = parseFloat(result.entX);
                const y = parseFloat(result.entY);

                const [
                    longitude,
                    latitude,
                ] = Projection(
                    '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs',
                    'EPSG:4326',
                    [x, y]
                );
                setHasSelectedAddress(true);
                setLatitude(latitude);
                setLongitude(longitude);
                setAddress(location.roadAddr);
                // console.log('latitude', latitude);
                // console.log('longitude', longitude);
                // setFieldValue('address', location.roadAddr);
            });
    };

    const resetSearchLocation = () => {
        currentPage = 1;
        isEndReached = false;
        isSearching = false;
        searchLocation(true);
    };

    return (
        <Dialog
            scroll={'body'}
            maxWidth={false}
            open={props.open}
            onClose={props.close}
            aria-labelledby="form-dialog-title"
            PaperProps={{
                style: {
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    color: '#000000',
                },
            }}
        >
            {/*<DialogTitle id="form-dialog-title">최악의 세대</DialogTitle>*/}
            <>
                <TotalContainer style={{ paddingTop: '30px' }}>
                    <UploadDropZone>
                        <Dropzone />
                    </UploadDropZone>
                    <RightContainer>
                        <TitleInputBar>
                            <TitleName
                                setHadTitlename={setHadTitlename}
                                setHadReview={setHadReview}
                            />
                        </TitleInputBar>
                        <AdvertisementComponent>
                            <Advertisement
                                setHasSelectedadvertisement={
                                    setHasSelectedadvertisement
                                }
                            />
                        </AdvertisementComponent>
                        <AtmosphereComponent>
                            <Atmosphere setHadAtmophere={setHadAtmophere} />
                        </AtmosphereComponent>
                        <LocationComponent>
                            <Address
                                setHasSelectedAddress={setHasSelectedAddress}
                                address={address}
                                setAddress={setAddress}
                                resetSearchLocation={resetSearchLocation}
                            />
                        </LocationComponent>
                        <div
                            style={{
                                marginTop: '-20px',
                                background: 'white',
                                maxWidth: '510px',
                                overflow: 'auto',
                                maxHeight: '140px',
                            }}
                        >
                            {/*{console.log(*/}
                            {/*    'hasSelectedAddress',*/}
                            {/*    hasSelectedAddress*/}
                            {/*)}*/}
                            {!hasSelectedAddress &&
                                locations.map((location, index) => (
                                    <LocationItem
                                        location={location}
                                        key={index}
                                        onSelect={(location) => {
                                            onLocationSelect(location);
                                        }}
                                    />
                                ))}
                        </div>
                        {hasSelectedAddress && (
                            <RatingComponent>
                                <Rating setHadRating={setHadRating} />
                            </RatingComponent>
                        )}
                    </RightContainer>
                    <ClearTwoToneIcon
                        fontSize="large"
                        style={{
                            cursor: 'pointer',
                            marginTop: '-20px',
                            marginRight: '-15px',
                        }}
                        onClick={props.close}
                    />
                </TotalContainer>
                <div
                    style={{
                        width: '100%',
                        height: '121px',
                    }}
                >
                    <Button
                        style={{
                            border: 'none',
                            width: '140px',
                            height: '70px',
                            background: '#ff534b',
                            borderRadius: '35px',
                            fontFamily: 'Noto Sans KR',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '35px',
                            lineHeight: '51px',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#ffffff',
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        onClick={onHandleUpload}
                    >
                        완료
                    </Button>
                </div>
            </>
        </Dialog>
    );
}

const LocationItem = (props) => {
    let { location } = props;
    return (
        <Button
            onClick={() => {
                props.onSelect(location);
            }}
            style={{
                paddingVertical: 20,
                paddingLeft: 15,
                borderBottomWidth: 1,
                borderColor: '#ddd',
            }}
        >
            <span style={{ fontSize: 18, color: '#000' }}>
                {location.roadAddrPart1.replace(location.siNm, '').trim()}
            </span>
            <span style={{ fontSize: 16, color: '#999', marginTop: 10 }}>
                {location.jibunAddr}
            </span>
            <span
                style={{
                    fontSize: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 2,
                    padding: 2,
                    color: '#999',
                    marginRight: 5,
                }}
            >
                도로명
            </span>
            <span style={{ color: '#999', fontSize: 15 }}>
                {location.rn} {location.buldMnnm}
            </span>
        </Button>
    );
};
