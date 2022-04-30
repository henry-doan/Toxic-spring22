import { Button, Container, Image} from 'react-bootstrap';
import styled from 'styled-components';

export const ImageContainer = styled(Container)` 
`
export const SideContainerToxic = styled(Container) `
padding-top: 40px;
margin: 10px;
color: white;
min-width: 40vw;
min-height: 341px; 
background: rgba(108, 145, 194, 0.3);
border: 1px solid #EA2B1F;
box-sizing: border-box;
border-radius: 10px;
`
export const SideContainerToxic2 = styled(Container) `
padding-top: 40px;
margin: 10px;
color: white;
min-width: 40vw;
min-height: 300px; 
background: rgba(108, 145, 194, 0.3);
border: 1px solid #EA2B1F;
box-sizing: border-box;
border-radius: 10px;
`

export const SideContainerNote = styled(Container) `
padding-top: 10px;
margin: 10px;
color: white;
min-width: 40vw;
min-height: 341px; 
border: 1px solid #FFFFFF;
background: rgba(255, 255, 255, 0.2);
border-radius: 10px;
`
export const SideContainerNote2 = styled(Container) `
padding-top: 25px;
margin: 10px;
color: white;
min-width: 40vw;
min-height: 300px; 
border: 1px solid #FFFFFF;
background: rgba(255, 255, 255, 0.2);
border-radius: 10px;
`
export const SideContainerMessage = styled(Container) `
padding-top: 40px;
margin: 10px;
color: white;
min-width: 40vw;
min-height: 341px; 
border: 1px solid #FFFFFF;
background: rgba(254, 179, 0, 0.2);
border-radius: 10px;
`
export const SideContainerMessage2 = styled(Container) `
padding-top: 40px;
margin: 10px;
color: white;
min-width: 40vw;
min-height: 300px; 
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
 max-width: 100px;
max-height: 100px;
 border-radius: 10px;

 `
//  export const NavBar = styled(Container)`
 
//  `
