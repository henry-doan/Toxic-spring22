import { Container, Button} from 'react-bootstrap';
import styled from 'styled-components';

export const MainNavbar = styled.h1`

`
export const MainContainer = styled(Container) `
  padding: 35px 450px;
  text-align: center;
  

`
export const SideContainer = styled(Container) `
  border: .05rem solid;
  border-color: black;
  border-radius: 10px;
`
export const MainBtn = styled(Button)`
  background: orange;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-family: "cursive", sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 80px;
  height:30px;
  margin-top: 2px;
  &:hover {
    color: black;
    background-color: orange
  }
 `
