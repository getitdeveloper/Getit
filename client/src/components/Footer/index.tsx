import React from 'react';
import { FooterWrapper, Container, Notice, Participants } from './styles';

function index(): JSX.Element {
  return (
    <FooterWrapper>
      <Container>
        <Notice>
          <h3>공지사항</h3>
          <a href='http://localhost:3000'>공지사항 없음</a>
        </Notice>
        <Participants>
          <h3>Developers</h3>
          <div>
            <p>Frontend</p>
            <a
              href='https://github.com/seungwonleee'
              target='_blank'
              rel='noreferrer noopener'
            >
              이승원,
            </a>
            <a
              href='https://github.com/alyssa1996'
              target='_blank'
              rel='noreferrer noopener'
            >
              박지수
            </a>
          </div>
          <div>
            <p>Backend</p>
            <a
              href='https://github.com/leeceo97'
              target='_blank'
              rel='noreferrer noopener'
            >
              이형준,
            </a>
            <a
              href='https://github.com/kgw7401'
              target='_blank'
              rel='noreferrer noopener'
            >
              김건우
            </a>
          </div>
        </Participants>
        <Participants>
          <h3>Designer</h3>
          <div>
            <a href='http://localhost:3000'>정유미</a>
          </div>
        </Participants>
      </Container>
    </FooterWrapper>
  );
}

export default index;
