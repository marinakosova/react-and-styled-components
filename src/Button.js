import styled from 'styled-components';

const backgroundColor = {
    default: 'seagreen',
    disabled: 'grey',
    destructive: 'red',
}

const DefaultButton = styled.button`
background-color: ${(props) => props.inputValue ? backgroundColor[props.type] : backgroundColor.disabled} ;
border: 0;
border-radius: 4px;
color: white;
margin-left: 0.5rem;
cursor: pointer;
`;

export const Button = ({ inputValue, type = 'default' }) => {
    return (
        <DefaultButton inputValue={inputValue} type={type}>Click Me</DefaultButton>
    );
}
