import React from 'react';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import MemberType from '@components/RecruitMembers/index';
import { IRecruitPost } from '@types';
import { PageBackground } from '@assets/styles/page';
import {
  Title,
  RecruitCondition,
  Content,
  ContentDetail,
  StyledLink,
  GridWrapper,
  Post,
  LikeIcon,
  CommentIcon,
} from './styles';

function RecruitPost({
  postList,
}: {
  postList: Array<IRecruitPost>;
}): JSX.Element {
  return (
    <PageBackground>
      <GridWrapper>
        <Grid container spacing={3}>
          {postList.map((post: IRecruitPost) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={post.id}>
              <Post>
                <StyledLink to={`/recruitBoard/${post.id}`}>
                  {/* 구인 종류 */}

                  <MemberType
                    developer={post?.developer}
                    designer={post?.designer}
                    pm={post?.pm}
                  />

                  {/* 제목 */}
                  <Title key={post.title}>
                    <h1>
                      {post.title.length >= 20
                        ? `${post.title.substring(0, 20)}...`
                        : post.title}
                    </h1>
                  </Title>

                  {/* 인원 및 기간 */}
                  <RecruitCondition>
                    <li>
                      모집 인원:{' '}
                      {`${post.developer + post.designer + post.pm} 명`}
                    </li>
                    <li>
                      모집 기간: {moment(post.end_date).format('YY/MM/DD')} 종료
                    </li>
                  </RecruitCondition>

                  {/* 내용 */}
                  <Content>
                    {post.content.length >= 80
                      ? `${post.content.substring(0, 80)}...`
                      : post.content}
                  </Content>
                </StyledLink>
                {/* 게시일, 좋아요, 댓글 */}
                <ContentDetail>
                  <div>{moment(post.end_date).format('YYYY.MM.DD')}</div>
                  <div>
                    <LikeIcon />
                    {post.likes}
                  </div>
                  <div>
                    <StyledLink to={`/recruitBoard/${post.id}`}>
                      <CommentIcon />
                      {post.comments}
                    </StyledLink>
                  </div>
                </ContentDetail>
              </Post>
            </Grid>
          ))}
        </Grid>
      </GridWrapper>
    </PageBackground>
  );
}

export default RecruitPost;
