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
import {
  MemberTypeWrapper,
  Title,
  RecruitCondition,
  Content,
  ContentDetail,
  StyledLink,
  GridWrapper,
  Post,
  LikeIcon,
  CommentIcon,
  PagingWrapper,
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
    <div>
      <GridWrapper>
        <Grid container spacing={3}>
          {recruitPostList.map((post: IRecruitPost) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={post.id}>
              <Post>
                <StyledLink to={`/recruitBoard/${post.id}`}>
                  {/* 구인 종류 */}
                  <MemberTypeWrapper>
                    {post.worker.map((member: string) => {
                      return (
                        <li key={member}>
                          <MemberType member={member} />
                        </li>
                      );
                    })}
                  </MemberTypeWrapper>

                  {/* 제목 */}
                  <Title key={post.title}>
                    <h1>{post.title}</h1>
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
                    <p>{`${post.content.substring(0, 80)}...`}</p>
                  </Content>
                </StyledLink>
                {/* 게시일, 좋아요, 댓글 */}
                <ContentDetail>
                  <ul>
                    <li>{moment(post.end_date).format('YYYY.MM.DD')}</li>
                    <li>
                      <span>
                        <LikeIcon />
                      </span>
                      <span>{post.likes}</span>
                    </li>
                    <li>
                      <StyledLink to={`/recruitBoard/${post.id}`}>
                        <span>
                          <CommentIcon />
                        </span>
                        <span>{post.comments}</span>
                      </StyledLink>
                    </li>
                  </ul>
                </ContentDetail>
              </Post>
            </Grid>
          ))}
        </Grid>
      </GridWrapper>

      {/* <PagingWrapper> */}
      <Paging
        activePage={page}
        totalPage={recruitPostTotalCount}
        setPage={setPage}
      />
      {/* </PagingWrapper> */}
    </div>
  );
}

export default RecruitPost;
