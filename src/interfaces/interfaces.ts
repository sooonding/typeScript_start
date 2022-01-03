export interface AppProps {
  headerText: string;
  extraText?: string; //옵션 속성 : 정의되어 있는 속성을 모두 다 사용하지 않아도 된다.
}

export interface Address {
  street: string;
  number: number;
  zip: string;
}
export interface User {
  name: string;
  age: number;
  country: string;
  // NOTE: 기존에 객체의 값으로 있던 address의 타입도 interfacef로 분리
  address: Address;
  admin: boolean;
}
