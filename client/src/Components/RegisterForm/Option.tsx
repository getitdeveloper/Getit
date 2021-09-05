import * as React from 'react';

function Option({ field }: { field: string }): JSX.Element {
  if (field !== '개발자') {
    return (
      <>
        <option value='description' disabled selected>
          레벨을 선택해주세요.
        </option>
        <option value='하수'>
          하수: 협업 경험은 없고 개인 프로젝트만 진행해보았습니다.
        </option>
        <option value='중수'>
          중수: 협업 경험이 있으며 다른 사용자들과 협업을 진행할 수 있습니다.
        </option>
        <option value='고수'>고수: 현재 실무에서 종사하고 있습니다.</option>
      </>
    );
  }
  return (
    <>
      <option value='description' disabled selected>
        레벨을 선택해주세요.
      </option>
      <option value='코린이'>
        코린이: 협업 경험은 없고 개인 프로젝트만 진행해보았습니다.
      </option>
      <option value='코등학생'>
        코등학생: 협업 경험이 없지만 API를 사용해 협업을 진행할 수 있습니다.
      </option>
      <option value='코대생'>
        코대생: 협업 경험이 있고 API를 자유자재로 다룰수 있습니다.
      </option>
      <option value='코드닌자'>
        코드닌자: 현재 실무에서 종사하고 있는 개발자입니다.
      </option>
    </>
  );
}

export default Option;
