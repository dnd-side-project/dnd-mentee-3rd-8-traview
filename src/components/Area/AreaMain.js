import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Picture from '../MainArea/Picture'; //안에 이미지
import db from '../../firebase';
import styled from 'styled-components';
import Loader from '../MainArea/Loader';
import '../MainArea/MainGrid.css';

const MarginContainer = styled.div`
    max-width: 1440px;
    margin: auto;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
`;

const MoodList = styled.ul`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 35px;
`;

const Mood = styled.li`
    display: flex;
    width: 44px;
    height: 36px;
    margin-left: 50px;
    color: ${(props) => (props.active ? '#ff534b' : '')};
    cursor: pointer;
    font-weight: 300;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.48px;
`;

const Container = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;

export default (props) => {
    const [posts, setPosts] = useState([]);
    const [last, setLast] = useState(null);
    const [mood, setMood] = useState('');
    const [hasMore, setHasMore] = useState(true);
    const moods = ['도시', '자연', '몽환', '여유', '고요', '활기', '낭만'];

    useEffect(() => {
        const unsubscribe = db
            .collection('posts')
            // .orderBy('timestamp', 'desc')
            .where('area', '==', props.local)
            .limit(10)
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
    }, [props.local]);

    const next = () => {
        if (last) {
            db.collection('posts')
                .orderBy('timestamp', 'desc')
                .startAfter(last)
                .limit(10)
                .onSnapshot((snapshot) => {
                    if (!snapshot.exists) {
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
                    if (!snapshot.exists) {
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

        db.collection('posts')
            //  .orderBy('timestamp', 'desc')
            .where('mood', '==', e.currentTarget.innerText)
            .where('area', '==', props.local)
            .limit(10)
            .onSnapshot((snapshot) => {
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        post: doc.data(),
                    }))
                );
                setLast(snapshot.docs[snapshot.docs.length - 1]);
            });
    };

    return (
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
                <Container>
                    {posts.map(({ post, id }) => (
                        <Picture
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
