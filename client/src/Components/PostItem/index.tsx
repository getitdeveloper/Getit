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
  PostDetail,
  DetailInfo,
} from './styles';
import MemberType from '../RecruitMembers/index';
import { HorizontalLine } from '../../styles/commons';

function PostItem(props: any) {
  const history = useHistory();
  const { content } = props;
  console.log(content);
  return (
    <div>
      <PostContainer>
        <WriterButton
          onClick={() => alert(`${content.writer}의 프로필로 이동`)}
        >
          <img src={content.writerImage} alt='writer-profile' width='15%' />
          <p>{content.writer}</p>
        </WriterButton>
        <PostInfoButton
          onClick={() => history.push('/freeBoard/detail', content.id)}
        >
          <TagWrapper>
            {content.tagType.map((member: string) => (
              <MemberType key={member} member={member} />
            ))}
          </TagWrapper>
          <PostTitle>{content.title}</PostTitle>
          <PostText>{content.text}</PostText>
        </PostInfoButton>
      </PostContainer>
      <PostDetail>
        <DetailInfo>
          <img src='/icons/calendar.svg' alt='write-date' />
          {moment(content.writeDate).format('YYYY년 MM월 DD일')}
        </DetailInfo>
        <DetailInfo>
          <img src='/icons/like.svg' alt='like-count' />
          {content.likeCount}
        </DetailInfo>
        <DetailInfo>
          <ChatBubbleOutlineIcon />
          {content.commentCount}
        </DetailInfo>
      </PostDetail>
      <HorizontalLine width='100%' />
    </div>
  );
}

export default PostItem;
