import React, { useEffect, useState } from 'react';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import Picture from '../components/MainArea/Picture';
import styled from 'styled-components';
const Container = styled.div`
    width: 1440px;
    margin: 36px 0;
    columns: 3;
    column-gap: 40px;
`;
function FollowPage() {
    const [{ user }] = useStateValue();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let newPostList = [];
        db.collection('subscribe')
            .where('userFrom', '==', user.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.docs.map((subscriber) => {
                    db.collection('posts')
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
    }, []);
    return (
        <div>
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
        </div>
    );
}

export default FollowPage;
