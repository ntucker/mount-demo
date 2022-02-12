import React, { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

const wrapperClass = css`
  border: 4px solid red;
`;
const Wrapper = styled.div`
  border: 4px solid red;
`;

export default function Test() {
  const [state, setState] = useState(true);
  return (
    <div>
      <div>
        <a href="#" onClick={() => setState(false)}>
          First
        </a>
        <a href="#" onClick={() => setState(true)}>
          Second
        </a>
      </div>
      <div>
        <div className={state ? wrapperClass : undefined}>
          <Mounter name="className" />
        </div>
      </div>
      <div>
        {state ? (
          <Wrapper>
            <Mounter name="component" />
          </Wrapper>
        ) : (
          <Mounter name="component" />
        )}
      </div>
    </div>
  );
}

function Mounter({ name = '' }: { name: string }): JSX.Element {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('mount', name);
    return () => {
      console.log('unmount', name);
    };
  }, []);
  return <div onClick={() => setCounter((c) => c + 1)}>mounter {counter}</div>;
}
