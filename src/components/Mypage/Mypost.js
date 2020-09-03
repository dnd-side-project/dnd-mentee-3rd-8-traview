import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Picture from './Picture';
import db from '../../firebase';
import Loader from '../MainArea/Loader';
import styled from 'styled-components';
import '../MainArea/MainGrid.css';
import { useStateValue } from '../../StateProvider';

const MarginContainer = styled.div`
    max-width: 1440px;
    margin: auto;
    margin-top: 90px;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 43px;
    letter-spacing: -0.6px;
`;

const MoodList = styled.ul`
    display: flex;
`;

const Mood = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 60px;
    box-sizing: border-box;
    color: ${(props) => (props.active ? '#ff534b' : '')};
    cursor: pointer;

    font-style: normal;
    font-weight: 300;
    font-size: 26px;
    line-height: 38px;
    letter-spacing: -0.52px;

    &:hover {
        color: #ff534b;
        transition: color 300ms ease-out;
    }
`;

const Container = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;

export default () => {
    const [posts, setPosts] = useState([]);
    const [last, setLast] = useState(null);
    const [mood, setMood] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const moods = ['내가 올린 사진', '신기해요', '찜목록'];
    const [{ user }] = useStateValue();
    useEffect(() => {
        const unsubscribe = db
            .collection('posts')
            .where('username', '==', user.displayName)
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
                setLast(snapshot.docs[snapshot.docs.length - 1]);
            });

        return () => {
            unsubscribe();
        };
    }, [user.displayName]);

    const next = () => {
        if (last) {
            db.collection('posts')
                // .orderBy('timestamp', 'desc')
                .where('username', '==', user.displayName)
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
                //  .orderBy('timestamp', 'desc')
                .where('username', '==', user.displayName)
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

    return (
        <MarginContainer>
            <HeaderContainer>
                <Title>게시물</Title>
                <MoodList>
                    {moods.map((moodText) => (
                        <Mood
                            key={moodText}
                            // onClick={onMoodChange}
                            // active={moodText === mood ? true : false}
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
                <Container>
                    {posts.map(({ post, id }) => (
                        <Picture
                            uid={post.uid}
                            id={id}
                            key={id}
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
                </Container>
            </InfiniteScroll>
        </MarginContainer>
    );
};

//orderBy 설정을하면 에러뜨는부분에서 설정해줘야하는데 설정하는 법을 몰라서 일단 주석처리해뒀습니다
// 그리고 마이페이지에 뜨는 사진도 orderby 설정하는법을 몰라서 일단 주석 처리해두고 진행했습니다.
