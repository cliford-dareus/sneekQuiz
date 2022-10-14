import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({ text, border, to, logOut }) => {
  return (
    <ButtonWrap border={border} to={to} onClick={logOut}>
      {text}
    </ButtonWrap>
  );
};

export default Button;

const ButtonWrap = styled(Link)`
  background: ${props => props.inputColor || "transparent"};
  padding: .5em 1em;
  border: ${props => props.border?'1px solid white':''};
  border-radius: .5em;
  font-weight: bold;
  margin-left: 1em;
  color: ${props => props.inputColor || "white"};
  cursor: pointer;
  &:hover{
    background: var(--primary-500)
  }
`;