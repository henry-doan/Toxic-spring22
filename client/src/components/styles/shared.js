import { Container, Image} from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
// export const MainNavbar = styled.h1`

<<<<<<< HEAD
export const MainNavbar = styled.h1`

`
export const MainContainer = styled(Container) `
  padding: 35px ;
  text-align: center;
  

`
export const bgContainer = styled(Container)`
display: flex;
background-color: black; 
min-width: 100%;
min-height: 100%
`
export const SideContainerToxic = styled(Container) `
min-width: 40vw;
min-height: 341px; 
background: rgba(108, 145, 194, 0.3);
border: 1px solid #EA2B1F;
box-sizing: border-box;
border-radius: 10px;
`

export const SideContainerNote = styled(Container) `
min-width: 40vw;
min-height: 341px; 
box-sizing: border-box;
border: 1px solid #FFFFFF;
background: rgba(255, 255, 255, 0.2);
border-radius: 10px;
`
export const SideContainerMessage = styled(Container) `
min-width: 40vw;
min-height: 341px; 
border: 1px solid #FFFFFF;
background: rgba(254, 179, 0, 0.2);
border-radius: 10px;
`
 export const LeftNav = styled(Container)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
max-width: 20vw;
position: fixed;
left: 35px;
min-height: 100vh ; 
list-style-type: none;
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.1);
box-sizing: border-box;
border-radius: 10px;
 `
 export const RightNav1 = styled(Container)`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
 max-width: 20vw;
 position: fixed;
 right: 35px;
 top: 0px;
 min-height: 50vh ; 
list-style-type: none;
background: rgba(255, 255, 255, 0.1);
`
export const NavImage = styled(Image)`
width: 153px;
`
export const RightNav2 = styled(Container)`
display: flex;
flex-direction: column;
 align-items: center;
 justify-content: flex-start;
max-width: 20vw;
min-height: 50vh ; 
right: 35px;
position: fixed;
bottom: 0px;
list-style-type: none;
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.1);
box-sizing: border-box;
 `
//  export const NavBar = styled(Container)`
 
//  `
=======
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
>>>>>>> 88aa9a0 (log in)
