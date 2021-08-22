import * as React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import './NavBar.css';

function NavBar(): JSX.Element {
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<{ event?: EventTarget }>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <div className='NavBar'>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label='스터디 모집 게시판' />
        <Tab label='질문 게시판' />
        <Tab label='자유 게시판' />
      </Tabs>
    </div>
  );
}

export default NavBar;
