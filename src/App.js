import { useState } from 'react';
import styled from 'styled-components';

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

const Button = styled.button`
background-color: ${props => props.inputValue ? 'seagreen' : 'black'} ;
border: 0;
border-radius: 4px;
color: white;
margin-left: 0.5rem;
`;

const BlueButton = styled(Button)`
background-color: blue;

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
        <Button inputValue={inputValue}>Click Me</Button>
      </header>
      <div>
        <BlueButton>I Am Blue</BlueButton>
      </div>
    </Div>
  );
}

export default App;
