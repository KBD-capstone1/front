import React, { useState } from 'react';
import styled from 'styled-components';

import InputUrl from '../components/autocomplete/freeSolo.jsx';
import InputKeywords from '../components/autocomplete/multipleValues.jsx';

// 스타일 정의
const Container = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

export default function Mvp() {
  const [url, setUrl] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Url: ${url}, Keywords: ${keywords}`);
  };

  return (
    <>
    <Container>
      <Title>KBD | 키보듣</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="url">Url</Label>
        <Input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter url"
        />
        <InputUrl />


        <Label htmlFor="keywords">Keywords</Label>
        <Input
          id="keywords"
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter keywords"
        />
        <InputKeywords />

        <Button type="submit">Submit</Button>
      </Form>

      <Result>
        <p><strong>Url : </strong> {url}</p>
        <p><strong>Keywords : </strong> {keywords}</p>
      </Result>
    </Container>

    </>
  );
}