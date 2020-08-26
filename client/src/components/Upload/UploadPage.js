import React, { useEffect, useState } from 'react';
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
import Address from './UploadFunction/Address';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import firebase from 'firebase/app';
import db, { storage } from '../../firebase';
import Projection from 'proj4';
import { extraApi } from '../../api_manager';
import { useStateValue } from '../../StateProvider';

let isSearching = false;
let isEndReached = false;
let currentPage = 1;

export default function UploadPage(props) {
    let [locations, setLocations] = useState([]);
    const [hasSelectedAddress, setHasSelectedAddress] = useState(false);
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState(''); //위도
    const [longitude, setLongitude] = useState(''); //경도
    const [advertising, setAdvertising] = useState(false); //광고여부
    const [mood, setMood] = useState(''); //분위기
    const [rating, setRating] = useState(''); //평점
    const [title, setTitle] = useState(null); //제목명
    const [review, setReview] = useState(null); //상세내용
    const [imageUrl, setImageUrl] = useState(null); //이미지
    const [{ user }] = useStateValue(); //로그인유저
    const [area, setArea] = useState(null);
    useEffect(() => {
        resetSearchLocation();
    }, []);

    const onHandleUpload = (e) => {
        e.preventDefault();

        // if(imageUrl===null){
        //     console.error("이미지 오류")
        // }
        // const uploadTask=db.ref(`/images/${imageUrl.name}`).put(imageUrl)
        // uploadTask.on('state_changed',
        //     (snapShot)=>{
        //     console.error(snapShot)
        //     },(err)=>{
        //     //catch the err
        //         console.error(err)
        //     },()=>{
        //     db.ref('images').child(imageUrl.name).getDownloadURL()
        //         .then(fireBaseUrl=>{
        //             setImageUrl(prevObject=>({...prevObject,imgUrl:fireBaseUrl}))
        //         })

        //     })
        if (
            imageUrl === null || //이미지업로드 X
            title === null || //제목이(x)
            review === null || //상세내용x
            mood === '' || //분위기가(X)
            area === null || //지역체크(위치X)
            rating === '' //평점(X)
        ) {
            alert('업로드내용을 입력해주세요');
        } else {
            const uploadTask = storage
                .ref(`images/${imageUrl.name}`)
                .put(imageUrl);
            uploadTask.on(
                'state_changed',
                (snapshot) => {},
                (error) => {
                    console.log(error);
                    alert(error.message);
                },
                () => {
                    storage
                        .ref('images')
                        .child(imageUrl.name)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection('posts').add({
                                advertising: advertising,
                                area: area,
                                heart: 0,
                                imageUrl: url,
                                latitude: latitude,
                                longitude: longitude,
                                mood: mood,
                                novelty: 0,
                                rating: rating,
                                review: review,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                title: title,
                                username: user.displayName,
                            });
                        });
                }
            );
            alert('업로드 완료');
            props.close();
        }
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

                if (
                    location.roadAddr.substr(0, 2) === '경기' ||
                    location.roadAddr.substr(0, 2) === '강원' ||
                    location.roadAddr.substr(0, 2) === '충청' ||
                    location.roadAddr.substr(0, 2) === '전라' ||
                    location.roadAddr.substr(0, 2) === '경상' ||
                    location.roadAddr.substr(0, 2) === '제주'
                ) {
                    setArea(location.roadAddr.substr(0, 2) + '도');
                } else {
                    setArea(location.roadAddr.substr(0, 2));
                }
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
                        <Dropzone setHadImageurl={setImageUrl} />
                    </UploadDropZone>
                    <RightContainer>
                        <TitleInputBar>
                            <TitleName
                                setHadTitlename={setTitle}
                                setHadReview={setReview}
                            />
                        </TitleInputBar>
                        <AdvertisementComponent>
                            <Advertisement
                                setHasSelectedadvertisement={setAdvertising}
                            />
                        </AdvertisementComponent>
                        <AtmosphereComponent>
                            <Atmosphere setHadAtmophere={setMood} />
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
                                <Rating setHadRating={setRating} />
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
