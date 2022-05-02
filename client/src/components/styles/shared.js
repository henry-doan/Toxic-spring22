import { Button, Container, Image} from 'react-bootstrap';
import styled from 'styled-components';
// export const MainNavbar = styled.h1`


export const bgContainer = styled(Container)`
display: flex;
background-color: black; 
min-width: 100%;
min-height: 100%
`

export const ProfileContainer = styled(Container)`
color: white;
margin-top: 10px;
background: linear-gradient(180deg, #131210 0%, #8B5CFF 100%);
`
export const SideContainerToxic = styled(Container) `
color: white;
padding-top: 10px;
min-width: 46vw;
min-height: 35vh; 
background: rgba(108, 145, 194, 0.3);
border: 1px solid #EA2B1F;
border-radius: 10px;
`
export const SideContainerToxic2 = styled(Container) `
color: white;
display: flex;
min-width: 45vw;
padding-top: 10px;
margin-top: 10px;
flex-direction: column;
justify-content: center;
background: rgba(108, 145, 194, 0.3);
border: 1px solid #EA2B1F;
box-sizing: border-box;
border-radius: 10px;
`
export const MainContainer = styled(Container) `
color: white;
margin-top: 10px;
display: flex;
flex-direction: column;
`

export const SideContainerNote = styled(Container) `
padding-top: 10px;
color: white;
min-width: 40vw;
min-height: 35vh; 
border: 1px solid #FFFFFF;
background: rgba(255, 255, 255, 0.2);
border-radius: 10px;
`
export const SideContainerNote2 = styled(Container) `
padding-top: 25px;
display: flex;
flex-direction: column;
color: white;
min-width: 45vw;
margin-top: 10px;
border: 1px solid #FFFFFF;
background: rgba(255, 255, 255, 0.2);
border-radius: 10px;
`
export const SideContainerMessage = styled(Container) `
padding-top: 10px;
color: white;
min-width: 40vw;
min-height: 35vh; 
border: 1px solid #FFFFFF;
background: rgba(254, 179, 0, 0.2);
border-radius: 10px;
`
export const SideContainerMessage2 = styled(Container) `
padding-top: 40px;
margin-top: 10px;
display: flex;
flex-direction: column;
color: white;
min-width: 45vw;
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
 border: 1px solid rgba(255, 255, 255, 0.1);
list-style-type: none;
background: rgba(255, 255, 255, 0.1);
`
export const LoginForm = styled(Container)`
display: flex;
width: 35vw;
margin-top: 350px;
margin-left: 100px;
justify-content: space-evenly;
flex-direction: column;
max-height: 45vh;
flex-direction: column;
color: white;
background-color: white;
border-radius: 10px;
`
export const RegisterForm = styled(Container)`
display: flex;
width: 35vw;
margin-top: 100px;
margin-left: 100px;
justify-content: space-evenly;
flex-direction: column;
max-height: 75vh;
flex-direction: column;
color: white;
background-color: white;
border-radius: 10px;
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
 export const SubButton = styled(Button)`
 float: right;
 position: relative;
 bottom: 35px;
 `
 export const UploadImage = styled(Image)`
 max-width: 150px;
 border-radius: 10px;

 `
 export const MainBtn = styled(Button)`
  background: orange;
  inline: flex;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-family: "cursive", sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 80px;
  height:30px;
  margin-top: 2px;
  
 `
//  export const NavBar = styled(Container)`
 
//  `

