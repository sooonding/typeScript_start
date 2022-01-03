import React, { useState } from 'react';

const defaultFormData = {
  title: '',
  body: '',
};

const Form = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  //NOTE: 이벤트의 type을 알고 싶다면 아래 return에서 콜백으로 지정해보면 해당 타입이 나온다.
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //NOTE: case1
    // setFormData({ ...formData, [e.target.id]: e.target.value });

    //NOTE: case2(권장)
    setFormData(prevData => {
      return { ...prevData, [e.target.id]: e.target.value };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };

  return (
    <div>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={e => onChange(e)} />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Form;
