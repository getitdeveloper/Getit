import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 페이지 이동시 Scroll이 전 페이지의 위치에서 변경되지 않는 문제를 해결하기 위한 코드
// 이 코드를 이용하여 Scroll은 항상 맨 위로 이동하게 됨.
// ! 항상 Router 안에 둘 것
// todo 같은 페이지 내에서의 Scroll은 이 기능이 적용되지 않음. -> 어떻게 변경하는 게 좋을지 확인할 것.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
