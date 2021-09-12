import * as React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import {
  useStyles,
  MemberTypeWrapper,
  Title,
  RecruitCondition,
  Content,
  ContentDetail,
  GridWrapper,
} from './styles';
import { dummyData } from './dummyData';

import MemberType from '../../Components/RecruitMembers/index';
import PostSubHeader from '../../Components/PostSubHeader';
import { PageBackground } from '../../styles/page';

function RecruitBoardPage(): JSX.Element {
  const classes = useStyles();

  const user = useSelector((state: RootStateOrAny) => state.user);
  console.log(user);

  return (
    <div>
      <PageBackground>
        <PostSubHeader boardType='Recruit' />
        <div className={classes.root}>
          <GridWrapper>
            <Grid container spacing={3}>
              {dummyData.map((content) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={`${content}`}>
                  <Paper className={classes.paper}>
                    {/* 구인 종류 */}
                    <MemberTypeWrapper>
                      {content.memberType.map((member) => {
                        return (
                          <li key={member}>
                            <MemberType member={member} />
                          </li>
                        );
                      })}
                    </MemberTypeWrapper>

                    {/* 제목 */}
                    <Title>
                      <h1>{content.title}</h1>
                    </Title>

                    {/* 인원 및 기간 */}
                    <RecruitCondition>
                      <li>모집 인원: {`${content.memberCount} 명`}</li>
                      <li>
                        모집 기간:{' '}
                        {moment(content.expireDate).format('MM월 DD일')}
                      </li>
                    </RecruitCondition>

                    {/* 내용 */}
                    <Content>
                      <p>{`${content.text.substring(0, 80)}...`}</p>
                    </Content>

                    {/* 게시일, 좋아요, 댓글 */}
                    <ContentDetail>
                      <ul>
                        <li>
                          {moment(content.expireDate).format('YYYY.MM.DD')}
                        </li>
                        <li>
                          <span>
                            <FavoriteBorderIcon />
                          </span>
                          <span>0</span>
                        </li>
                        <li>
                          <span>
                            <ChatBubbleOutlineIcon />
                          </span>
                          <span>0</span>
                        </li>
                      </ul>
                    </ContentDetail>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </GridWrapper>
        </div>
      </PageBackground>
    </div>
  );
}

export default RecruitBoardPage;
