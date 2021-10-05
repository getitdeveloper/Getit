import * as React from 'react';
import { RECRUIT_POST_REQUEST } from '@reducers/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '@components/LoadingSpinner';
import { IPostId } from '@types';
import UserImg from '@assets/images/user.svg';
import MemberType from '@components/RecruitMembers/index';

function RecruitPostDetail(): JSX.Element {
  const dispatch = useDispatch();
  const { postId }: IPostId = useParams();
  const recruitPostDetail = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost,
  );

  const worker = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.worker,
  );

  const startDate = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.start_date,
  );

  const endDate = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.end_date,
  );

  const developer = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.developer,
  );

  const designer = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.designer,
  );

  const pm = useSelector((state: RootStateOrAny) => state.post.recruitPost?.pm);

  const stacks = useSelector(
    (state: RootStateOrAny) => state.post.recruitPost?.stack,
  );

  useEffect(() => {
    dispatch({
      type: RECRUIT_POST_REQUEST,
      data: postId,
    });
  }, []);

  if (!recruitPostDetail) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5' }}>
      <div
        style={{
          maxWidth: '128rem',
          width: '100%',
          margin: '0 auto',
          backgroundColor: '#FFFFFF',
          height: '89.5rem',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid black',
              width: '30.85rem',
            }}
          >
            <div style={{ margin: '0 auto' }}>
              <div
                style={{
                  backgroundColor: '#e0e0e0',
                  width: '9rem',
                  height: '9rem',
                  borderRadius: '13px',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={UserImg}
                    alt='study profile'
                    style={{
                      width: '40%',
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>
              스터디명
            </div>
            <div>
              <ul style={{ display: 'flex' }}>
                {worker.map((member: string) => {
                  return (
                    <li key={member}>
                      <MemberType member={member} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* ############### */}

          <div style={{ width: '97.15rem' }}>
            <div style={{ padding: '7rem' }}>
              <h1>제목</h1>
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  maxWidth: '84rem',
                  width: '100%',
                  minHeight: '5rem',
                  height: 'auto',
                  display: 'flex',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '1.5rem' }}>{recruitPostDetail.title}</p>
              </div>

              <br />
              <h2>내용</h2>
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  maxWidth: '84rem',
                  width: '100%',
                  height: '20.9rem',
                  display: 'flex',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p style={{ fontSize: '1.5rem' }}>
                  {recruitPostDetail.content}
                </p>
              </div>
              <br />
              <h2>모집 인원</h2>
              <div>
                <span
                  style={{
                    marginRight: '1rem',
                    backgroundColor: '#f5f5f5',
                    // height: '100%',
                    fontSize: '1.5rem',
                  }}
                >
                  개발자 {developer}명
                </span>
                <span
                  style={{
                    marginRight: '1rem',
                    backgroundColor: '#f5f5f5',
                    // height: '100%',
                    fontSize: '1.5rem',
                  }}
                >
                  디자이너 {designer}명
                </span>
                <span
                  style={{
                    marginRight: '1rem',
                    backgroundColor: '#f5f5f5',
                    // height: '100%',
                    fontSize: '1.5rem',
                  }}
                >
                  기획자 {pm}명
                </span>
              </div>
              <br />
              <h2>모집 기간</h2>
              <div
                style={{
                  backgroundColor: '#f5f5f5',
                  height: '6.1rem',
                  fontSize: '1.5rem',
                  display: 'flex',
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}
              >{`${startDate} ~ ${endDate}`}</div>
              <br />
              <h2>기술 스택</h2>
              <div>
                {stacks.map((value: string) => {
                  return (
                    <span style={{ fontSize: '1.5rem' }} key={value}>
                      {value}
                    </span>
                  );
                })}
              </div>
              <br />
              <h2>참여중인 Get Iter</h2>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitPostDetail;
