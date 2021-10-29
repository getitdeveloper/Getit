import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import MemberType from '@components/RecruitMembers/index';
import { RECRUIT_POST_LIST_REQUEST } from '@reducers/actions';
import LoadingSpinner from '@components/LoadingSpinner';
import Paging from '@components/Paging';
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

function RecruitPost(): JSX.Element {
  const dispatch = useDispatch();
  const recruitPostList = useSelector(
    (state: RootStateOrAny) => state.postList.recruitPostList?.results,
  );
  const recruitPostTotalCount = useSelector(
    (state: RootStateOrAny) => state.postList.recruitPostList?.count,
  );

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: RECRUIT_POST_LIST_REQUEST,
      data: page,
    });
  }, [page]);

  if (!recruitPostList) {
    return <LoadingSpinner />;
  }

  return (
    <PageBackground>
      <GridWrapper>
        <Grid container spacing={3}>
          {recruitPostList.map((post: IRecruitPost) => (
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
                      모집 기간:{' '}
                      {moment(post.end_date).format('YY년 MM월 DD일')}
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

      <Paging
        activePage={page}
        totalPage={recruitPostTotalCount}
        setPage={setPage}
      />
    </PageBackground>
  );
}

export default RecruitPost;
