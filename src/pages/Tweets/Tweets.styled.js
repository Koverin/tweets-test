import styled from '@emotion/styled';
import background from '../../images/background.png';
import avatar from '../../images/avatar.png';
import goit from '../../images/goit.png';

export const TweetBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TweetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  min-height: 600px;
`;

export const TweetList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
`;

export const TweetCard = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-image: url(${background}), url(${avatar}), url(${goit}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);

  background-repeat: no-repeat;
  background-position: top 28px center, center right, 6% 5%, center;
`;

export const TweetItem = styled.li``;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  border-radius: 50%;
  transform: translate(-50%, -55%);
`;

export const TweetName = styled.p`
  margin: 0;
  position: absolute;
  top: 270px;
`;

export const TweetTweets = styled.p`
  margin: 0;
  position: absolute;
  top: 300px;
`;

export const TweetFollowers = styled.p`
  margin: 0;
  position: absolute;
  left: 50%;
  top: 329px;
  transform: translateX(-50%);
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  font-weight: 600;
  position: absolute;
  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;
  font-size: 18px;
  line-height: 22px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  color: #373737;
`;
