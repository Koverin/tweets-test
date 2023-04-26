import { Button } from '../../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { fetchFollow, fetchUsers } from '../../redux/services';
import { useEffect, useState } from 'react';
import { Paginations } from '../../components/Pagination/Pagination';
import {
  TweetBox,
  TweetContainer,
  TweetList,
  TweetCard,
  Img,
  TweetName,
  TweetTweets,
  TweetFollowers,
  Btn,
} from './Tweets.styled';
import styled from '@emotion/styled';
import { BiLeftArrowAlt } from 'react-icons/bi';

export const Tweets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPurPages] = useState(9);
  const users = useSelector(state => state.follow.users);

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.follow.isLoading);

  const lastUserIndex = currentPage * usersPurPages;
  const firstUserIndex = lastUserIndex - usersPurPages;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    padding: 5px;
    text-decoration: none;
    width: 100px;
    border-radius: 5px;
    color: white;
    background-color: #471ca9;
  `;

  return (
    <TweetBox>
      <StyledLink to="/">
        <BiLeftArrowAlt /> Back
      </StyledLink>
      <TweetContainer>
        {isLoading && <Loader />}
        {currentUsers && (
          <TweetList>
            {currentUsers.map(user => (
              <li key={user.id}>
                <TweetCard>
                  <Img alt="img" src={user.avatar} />
                  <TweetName>{user.user}</TweetName>
                  <TweetTweets>{user.tweets} TWEETS</TweetTweets>
                  <TweetFollowers>{user.followers} FOLLOWERS</TweetFollowers>
                  {user.follow ? (
                    <Btn
                      style={{ backgroundColor: '#5CD3A8' }}
                      onClick={() => dispatch(fetchFollow(user))}
                    >
                      FOLLOWING
                    </Btn>
                  ) : (
                    <Button onClick={() => dispatch(fetchFollow(user))}>
                      FOLLOW
                    </Button>
                  )}
                </TweetCard>
              </li>
            ))}
          </TweetList>
        )}
      </TweetContainer>
      <Paginations
        usersPurPages={usersPurPages}
        users={users}
        paginate={paginate}
      />
    </TweetBox>
  );
};
