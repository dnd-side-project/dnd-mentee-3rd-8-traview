import React, { useState, useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import db from '../firebase';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../components/MainArea/Loader';
import Picture from '../components/MainArea/Picture';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import Avartar from '../components/Detail/DetailFunction/Avartar';
const Container = styled.div`
    z-index: 1;
    margin-bottom: 14px;
    margin-top: -20px;
`;

const BackgroundImage = styled.div`
    width: 100%;
    height: 787px;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 100) 0,
            rgba(25, 25, 25, 0) 40%,
            rgba(25, 25, 25, 0) 40%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 0) 66.66%,
            rgba(0, 0, 0, 50) 100%
        ),
        url(${(props) => props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    align-items: center;
`;
const MarginContainer = styled.div`
    position: relative;
    z-index: 100;
    max-width: 1440px;
    margin: auto;
    margin-top: -90px;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: flex-end;
`;

const MoodList = styled.ul`
    display: flex;
`;

const Mood = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 46px;
    margin-left: 20px;
    box-sizing: border-box;
    color: ${(props) => (props.active ? '#ff534b' : '')};
    cursor: pointer;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.48px;
    &:hover {
        color: #ff534b;
        transition: color 300ms ease-out;
    }
`;

const ScrollContainer = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;
const MainTitle = styled.h2`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 70px;
    line-height: 101px;
    letter-spacing: -1.4px;
    color: #ffffff;
    margin-right: 60px;
`;

function FollowPage() {
    const [{ user }] = useStateValue();
    const [last, setLast] = useState(null);
    const [posts, setPosts] = useState([]);
    const [userAvatar, setUserAvatar] = useState([]);
    const [mood, setMood] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const moods = ['도시', '자연', '몽환', '여유', '고요', '활기', '낭만'];

    useEffect(() => {
        let newPostList = [];
        db.collection('subscribe')
            .where('userFrom', '==', user.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.docs.map((subscriber) => {
                    db.collection('posts')
                        .orderBy('timestamp', 'desc')
                        .where('uid', '==', subscriber.data().userTo)
                        .onSnapshot((snapshot) => {
                            snapshot.docs.map((doc) => {
                                newPostList.push({
                                    id: doc.id,
                                    post: doc.data(),
                                });
                                setUserAvatar([...newPostList]);
                                setPosts([...newPostList]);
                            });
                        });
                });
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error);
            });
    }, []);
    const next = () => {
        if (last) {
            db.collection('posts')
                .orderBy('timestamp', 'desc')

                .startAfter(last)
                .limit(10)
                .onSnapshot((snapshot) => {
                    if (snapshot.empty) {
                        setHasMore(false);
                        return;
                    }
                    setPosts([
                        ...posts,
                        ...snapshot.docs.map((doc) => ({
                            id: doc.id,
                            post: doc.data(),
                        })),
                    ]);
                    setLast(snapshot.docs[snapshot.docs.length - 1]);
                });
        }
    };
    const moodNext = () => {
        if (last) {
            db.collection('posts')
                .orderBy('timestamp', 'desc')

                .where('mood', '==', mood)
                .startAfter(last)
                .limit(10)
                .onSnapshot((snapshot) => {
                    if (snapshot.empty) {
                        setHasMore(false);
                        return;
                    }
                    setPosts([
                        ...posts,
                        ...snapshot.docs.map((doc) => ({
                            id: doc.id,
                            post: doc.data(),
                        })),
                    ]);
                    setLast(snapshot.docs[snapshot.docs.length - 1]);
                });
        }
    };
    const onMoodChange = (e) => {
        setMood(e.currentTarget.innerText);
        setPosts([]);
        let newPostList = [];
        db.collection('subscribe')
            .where('userFrom', '==', user.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.docs.map((subscriber) => {
                    db.collection('posts')
                        .where('mood', '==', mood)
                        .where('uid', '==', subscriber.data().userTo)
                        .onSnapshot((snapshot) => {
                            snapshot.docs.map((doc) => {
                                newPostList.push({
                                    id: doc.id,
                                    post: doc.data(),
                                });
                                setPosts([...newPostList]);
                            });
                        });
                });
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error);
            });
    };

    return (
        <>
            <Container>
                <BackgroundImage bg={'/images/FollowPickbg.png'}>
                    <div
                        style={{
                            display: 'flex',
                            position: 'absolute',
                            top: '33%',
                            left: '15%',
                            alignItems: 'center',
                        }}
                    >
                        <MainTitle>팔로워 Pick</MainTitle>
                        {userAvatar.map((doc, index) => {
                            if (index < 3) {
                                if (doc !== undefined)
                                    return (
                                        <Avartar
                                            key={doc.post.uid}
                                            uid={doc.post.uid}
                                            Type="Follower"
                                        />
                                    );
                            } else {
                            }
                        })}
                        {/*<Avartar />*/}
                    </div>
                </BackgroundImage>
            </Container>
            <MarginContainer>
                <HeaderContainer>
                    <MoodList>
                        {moods.map((moodText) => (
                            <Mood
                                key={moodText}
                                onClick={onMoodChange}
                                active={moodText === mood ? true : false}
                            >
                                {moodText}
                            </Mood>
                        ))}
                    </MoodList>
                </HeaderContainer>

                <InfiniteScroll
                    dataLength={posts.length}
                    next={(mood && moodNext) || next}
                    hasMore={hasMore}
                    loader={<Loader />}
                >
                    <ScrollContainer>
                        <FlipMove>
                            {posts.map(({ post, id }, index) => (
                                <Picture
                                    uid={post.uid}
                                    id={id}
                                    key={index}
                                    advertising={post.advertising}
                                    area={post.area}
                                    avatar={post.avatar}
                                    heart={post.heart}
                                    imageUrl={post.imageUrl}
                                    latitude={post.latitude}
                                    longitude={post.longitude}
                                    mood={post.mood}
                                    novelty={post.novelty}
                                    rating={post.rating}
                                    review={post.review}
                                    timestamp={post.timestamp}
                                    title={post.title}
                                    username={post.username}
                                    address={post.address}
                                />
                            ))}
                        </FlipMove>
                    </ScrollContainer>
                </InfiniteScroll>
            </MarginContainer>
        </>
    );
}

export default FollowPage;
