import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import MemberType from '@components/RecruitMembers/index';

import axios from 'axios';
import {
  MemberTypeWrapper,
  Title,
  RecruitCondition,
  Content,
  ContentDetail,
  GridWrapper,
  Post,
  LikeIcon,
  CommentIcon,
} from './styles';
import { dummyData } from './dummyData';

function RecruitPost(): JSX.Element {
  return (
    <GridWrapper>
      <Grid container spacing={3}>
        {dummyData.map((content) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={content.title}>
            <Post>
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
                  모집 기간: {moment(content.expireDate).format('MM월 DD일')}
                </li>
              </RecruitCondition>

              {/* 내용 */}
              <Content>
                <p>{`${content.text.substring(0, 80)}...`}</p>
              </Content>

              {/* 게시일, 좋아요, 댓글 */}
              <ContentDetail>
                <ul>
                  <li>{moment(content.expireDate).format('YYYY.MM.DD')}</li>
                  <li>
                    <span>
                      <LikeIcon />
                    </span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>
                      <CommentIcon />
                    </span>
                    <span>0</span>
                  </li>
                </ul>
              </ContentDetail>
            </Post>
          </Grid>
        ))}
      </Grid>
    </GridWrapper>
  );
}

export default RecruitPost;
