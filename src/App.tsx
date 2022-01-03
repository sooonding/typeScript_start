import React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {
  headerText: string;
  extraText?: string; //옵션 속성 : 정의되어 있는 속성을 모두 다 사용하지 않아도 된다.
}

function App({ headerText, extraText }: AppProps) {
  return (
    <>
      <h1>{headerText}</h1>
      {/* extraText는 상위에서 선언되지 않았지만 옵션 설정으로 인해 에러가 나지 않음 */}
      {extraText && <p>extraText</p>}
    </>
  );
}

export default App;
