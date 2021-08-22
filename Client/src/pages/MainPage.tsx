import * as React from 'react';

function MainPage(): JSX.Element {
  const styles = {
    padding: '48px',
    border: '1px solid black',
    margin: '16px',
  };
  return (
    <div>
      <div style={styles}>block1</div>
      <div style={styles}>block2</div>
      <div style={styles}>block3</div>
      <div style={styles}>block4</div>
      <div style={styles}>block5</div>
      <div style={styles}>block6</div>
      <div style={styles}>block7</div>
    </div>
  );
}

export default MainPage;
