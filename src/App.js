import { useState } from 'react';
import styled from 'styled-components';
import {Button} from './Button';

const Div = styled.div`
background-color: pink;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Input = styled.input`
width: 40vw;
`;

const App = () => {
const [inputValue, setInputValue] = useState('');

const handleChange = (e) => {
  setInputValue(e.target.value);
}

  return (
    <Div>
      <header className="App-header">
        <Input type="text" 
        onChange={handleChange} 
        defaultValue={inputValue} 
        />
    <Button inputValue={inputValue} />
      </header>
    </Div>
  );
}

export default App;
