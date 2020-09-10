import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../MainArea/Loader';
import Picture from '../Mypage/Picture';
import styled from 'styled-components';
const MarginContainer = styled.div`
    max-width: 1440px;
    margin: auto;
    margin-top: 40px;
`;
const TitleText = styled.div`
    margin: auto 0;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 87px;
    align-items: center;
    color: #ffffff;
    text-align: center;
    margin-bottom: 20px;
`;

const Container = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;
function InterestPick(props) {
    const [hasMore, setHasMore] = useState(true);
    const [interstCount, setInterstCount] = useState(0); //신기해요 수
    const [interested, setInterested] = useState(false); //신기해요 상태
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        //포스트 별좋아요 수를 나타낸다
        let newPostList = [];
        db.collection('posts').onSnapshot((snapshot) => {
            snapshot.docs.map((postInfo) => {
                db.collection('Like_Inter')
                    .where('postId', '==', postInfo.id)
                    .where('type', '==', 'Interest')
                    .get()
                    .then((doc) => {
                        if (doc.empty) {
                            newPostList.push({
                                id: postInfo.id,
                                post: postInfo.data(),
                                interestCount: 0,
                            });
                            setInterstCount(0);
                        } else {
                            newPostList.push({
                                id: postInfo.id,
                                post: postInfo.data(),
                                interestCount: doc.size,
                            });
                        }
                        newPostList.sort(function (a, b) {
                            if (a.interestCount > b.interestCount) {
                                return -1;
                            }
                            if (a.interestCount < b.interestCount) {
                                return 1;
                            }
                            // a must be equal to b
                            return 0;
                        });
                        setPosts([...newPostList]);
                    });
            });
        });
    }, [interested]);
    return (
        <MarginContainer>
            <InfiniteScroll
                dataLength={posts.length}
                next={() => setHasMore(false)}
                hasMore={hasMore}
                loader={<Loader />}
            >
                <div style={{ display: 'flex' }}>
                    <TitleText> 신기한 PICK</TitleText>
                    <div style={{ marginLeft: 20 }}>
                        <img
                            src="/images/Detail/Interesting.png"
                            alt="Interesting"
                        />
                    </div>
                </div>
                <Container>
                    {posts.map(({ post, id }) => (
                        <Picture
                            Type="Inter"
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
}

export default InterestPick;
