import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppProps, User } from './interfaces/interfaces';
import Form from './components/Form';

function App({ headerText, extraText }: AppProps) {
  /*
  NOTE
  state의 interface type지정은 <interface>로 지정,
  여기서 |는 유니온타입(예: 아래 코드는 User 인터페이스 타입 이거나 null)
  */
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = () => {
    setUser({
      name: 'mike',
      age: 27,
      country: 'korea',
      address: {
        street: 'Main st.',
        number: 88,
        zip: '21345',
      },
      admin: false,
    });
  };
  return (
    <>
      <h1>{headerText}</h1>
      {/* extraText는 상위에서 선언되지 않았지만 옵션 설정으로 인해 에러가 나지 않음 */}
      {extraText && <p>extraText</p>}
      <button onClick={fetchUser}>fetch user on Click</button>
      {user && <Form />}
    </>
  );
}

export default App;
