import { css } from '@linaria/core';

import Test from './Test';

const margin = '8px';

const home = css`
  min-height: 100vh;
  margin: -${margin};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  text-align: center;

  > nav {
    position: fixed;
    top: 18px;
  }

  p:not(:first-child) {
    margin-top: 20px;
  }
`;

export default function Home() {
  return (
    <div className={home}>
      <nav>Unmounting Test</nav>
      <main>
        <Test />
      </main>
    </div>
  );
}
