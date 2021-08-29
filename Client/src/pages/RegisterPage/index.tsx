import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';

function RegisterPage(): JSX.Element {
  const history = useHistory();
  const message = useSelector((state: RootStateOrAny) => state.user.id.message);
  // 기존 회원 또는 비회원 접근 방지 라우팅
  useEffect(() => {
    if (message !== 'register') {
      return history.push('/');
    }
  }, []);
  return (
    <div>
      {/* TODO 8/30 아직 만드는 중 입니다. */}
      <h1>회원가입</h1>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='email'>
          이메일
          <input
            type='text'
            name='email'
            id='email'
            placeholder='이메일을 입력해주세요.'
          />
        </label>

        <label htmlFor='job'>
          분야(필수)
          <select name='order' form='myForm' id='job'>
            <option value='americano'>아메리카노</option>
            <option value='caffe latte'>카페라테</option>
            <option value='cafe au lait'>카페오레</option>
            <option value='espresso'>에스프레소</option>
          </select>
        </label>
        <input type='text' placeholder='이메일을 입력해주세요.' />
        <input type='text' placeholder='이메일을 입력해주세요.' />
        <input type='text' placeholder='이메일을 입력해주세요.' />
      </div>
    </div>
  );
}

export default RegisterPage;
