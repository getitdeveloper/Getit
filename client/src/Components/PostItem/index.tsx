import * as React from 'react';
import { useHistory } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import moment from 'moment';
import {
  WriterButton,
  PostContainer,
  PostInfoButton,
  PostText,
  PostTitle,
  TagWrapper,
  PostDetails,
  DetailInfo,
} from './styles';
import MemberType from '../RecruitMembers/index';
import { HorizontalLine } from '../../styles/commons';

function PostItem(props: any) {
  const history = useHistory();
  const { content, boardType } = props;
  return (
    <div>
      <PostContainer>
        {/* <WriterButton
          onClick={() => alert(`${content.writer}의 프로필로 이동`)}
        >
          <img src={content.writerImage} alt='writer-profile' width='15%' />
          <p style={{ fontSize: 'x-small' }}>{content.writer}</p>
        </WriterButton> */}
        <PostInfoButton
          onClick={() => {
            if (boardType === 'Question') {
              history.push('/questionBoard/detail', content.id);
            } else if (boardType === 'Free') {
              history.push('/freeBoard/detail', content.id);
            }
          }}
        >
          {/* <TagWrapper>
            {content.tagType.map((member: string) => (
              <MemberType key={member} member={member} />
            ))}
          </TagWrapper> */}
          <PostTitle>{content.title}</PostTitle>
          <PostText>{content.content}</PostText>
        </PostInfoButton>
      </PostContainer>
      <PostDetails>
        <DetailInfo>
          <img src='/icons/calendar.svg' alt='write-date' />
          {moment(content.create_at).format('YYYY년 MM월 DD일')}
        </DetailInfo>
        <DetailInfo>
          <img src='/icons/like.svg' alt='like-count' />0
          {/* {content.likeCount} */}
        </DetailInfo>
        <DetailInfo>
          <ChatBubbleOutlineIcon />2{/* {content.commentCount} */}
        </DetailInfo>
      </PostDetails>
      <HorizontalLine width='100%' />
    </div>
  );
}

export default PostItem;
