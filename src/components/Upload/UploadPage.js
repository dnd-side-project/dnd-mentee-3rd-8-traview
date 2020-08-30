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
    const [selectPostId, setSelectPostId] = useState(null);
    let [locations, setLocations] = useState([]);
    const [hasSelectedAddress, setHasSelectedAddress] = useState(false);
    const [address, setAddress] = useState(props.address ? props.address : '');
    const [latitude, setLatitude] = useState(
        props.latitude ? props.latitude : ''
    ); //위도
    const [longitude, setLongitude] = useState(
        props.longitude ? props.longitude : ''
    ); //경도
    const [advertising, setAdvertising] = useState(
        props.advertising ? props.advertising : false
    ); //광고여부
    const [mood, setMood] = useState(props.mood ? props.mood : ''); //분위기
    const [rating, setRating] = useState(props.rating ? props.rating : ''); //평점
    const [title, setTitle] = useState(props.title ? props.title : null); //제목명
    const [review, setReview] = useState(props.review ? props.review : null); //상세내용
    const [imageUrl, setImageUrl] = useState(
        props.imageUrl ? props.imageUrl : null
    ); //이미지
    const [{ user }] = useStateValue(); //로그인유저
    const [area, setArea] = useState(props.area ? props.area : null);
    const [checkUpdate, setCheckUpdate] = useState(true);
    useEffect(() => {
        resetSearchLocation();
    }, []);
    useEffect(() => {
        // setHasSelectedAddress(false);
        // setAddress(props.address ? props.address : '');
        // setAdvertising(props.advertising ? props.advertising : false);
        // setMood(props.mood ? props.mood : '');
        // setRating(props.rating ? props.rating : '');
        // setTitle(props.title ? props.title : null);
        // setReview(props.review ? props.review : null);
        // setImageUrl(props.imageUrl ? props.imageUrl : null);
    }, []);
    const onHandleUpload = (e) => {
        e.preventDefault();
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
            const randomNum = Math.floor(
                Math.random() * (1000000 - 0) + 1000000
            );
            const imageName = `${imageUrl.name}${randomNum}`;
            const uploadTask = storage.ref(`images/${imageName}`).put(imageUrl);
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
                        .child(imageName)
                        .getDownloadURL()
                        .then((url) => {
                            db.collection('posts').add({
                                advertising: advertising,
                                area: area,
                                avatar: user.photoURL,
                                heart: 0,
                                imageUrl: url,
                                latitude: latitude,
                                longitude: longitude,
                                mood: mood,
                                novelty: 0,
                                rating: [rating],
                                review: review,
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                title: title,
                                username: user.displayName,
                                address: address,
                            });
                        });
                }
            );
            alert('업로드 완료');
            props.close();
        }
    };

    const onHandleUpdate = (e) => {
        console.log('id', props.id);
        console.log('광고', advertising);
        console.log('제목', title);
        console.log('상세내용', review);
        console.log('무드', mood);
        console.log('레이팅', Rating);
        console.log('아리아', area);

        e.preventDefault();
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
            let PostInfoChange = db.collection('posts').doc(props.id);
            PostInfoChange.update({
                advertising: advertising, //광고
                area: area, //지역
                avatar: user.photoURL, //아바타
                imageUrl: imageUrl, //이미지
                latitude: latitude, //위도
                longitude: longitude, //경도
                mood: mood, //분위기
                rating: rating, //평점
                review: review, //리뷰
                timestamp: firebase.firestore.FieldValue.serverTimestamp(), //시간
                title: title, //제목
                address: address, //주소
            }).then((temp) => console.log('success', temp));
            alert('게시물이 수정되었습니다.');
            props.close();
        }
    };
    const searchLocation = (reset = false) => {
        if (isSearching || isEndReached || !address) {
            return;
        }
        isSearching = true;
        extraApi
            .get('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
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
            .get('https://www.juso.go.kr/addrlink/addrCoordApi.do', data)
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
                        <Dropzone
                            imageUrl={imageUrl}
                            setHadImageurl={setImageUrl}
                        />
                    </UploadDropZone>
                    <RightContainer>
                        <TitleInputBar>
                            <TitleName
                                title={title}
                                review={review}
                                setHadTitlename={setTitle}
                                setHadReview={setReview}
                            />
                        </TitleInputBar>
                        <AdvertisementComponent>
                            <Advertisement
                                setHasSelectedadvertisement={setAdvertising}
                                advertising={advertising}
                            />
                        </AdvertisementComponent>
                        <AtmosphereComponent>
                            <Atmosphere setHadAtmophere={setMood} mood={mood} />
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
                                <Rating
                                    setHadRating={setRating}
                                    rating={rating}
                                />
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
                        onClick={
                            props.username ? onHandleUpdate : onHandleUpload
                        }
                    >
                        {props.username ? '수정' : '완료'}
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
