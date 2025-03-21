
import styled from 'styled-components';

export const Container = styled.div`
background-color: #fcfcfc;
border-radius: 20px;
box-shadow: 0 14px 28px rgba(8, 107, 172, 0.25), 0 10px 10px rgba(56, 155, 254, 0.22);
position: relative;
overflow: hidden;
width: 900px;
min-width: 50%;
min-height: 650px;
margin-top: 20px;
margin-left: 18%;


@media (max-width: 768px) {
  width: 90%;
  margin-left: 5%;
  min-height: 500px;
}

 @media (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    min-height: 400px;
  }

`;

export const SignUpContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
 ${props => props.signinIn !== true ? `
   transform: translateX(100%);
   opacity: 1;
   z-index: 5;
 ` 
 : null}
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    opacity: 1;
    z-index: 5;
    transform: translateX(100%);
    ${props => props.signinIn !== true ? `
      transform: translateX(0);
    ` : null}
  }
`;


export const SignInContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;
${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 @media (max-width: 768px) {
    width: 100%;
    left: 0;
    ${props => (props.signinIn !== true ? `transform: translateX(0);` : null)}
  }
`;

export const Form = styled.form`
background-color:whitesmoke;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;

 @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Input = styled.input`
background-color: #ffffff;
border: none;
border-radius:20px;
padding: 12px 15px;
margin: 8px 0;
width: 100%;

 @media (max-width: 768px) {
    padding: 10px 12px;
  }
`;


export const Button = styled.button`
   border-radius: 20px;
   border: 1px solid #060ead;
   background-color: #060ead;
   color: #ffffff;
   font-weight: bold;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
       
  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 10px;
  }
`;
export const GhostButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Anchor = styled.a`
color: #090808;
font-size: 14px;
text-decoration: none;
margin: 15px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}

   @media (max-width: 768px) {
    width: 100%;
    left: 0;
    transform: translateX(-100%);
    ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
  }
`;

export const Overlay = styled.div`
background-color: #ffffff;
background: -webkit-linear-gradient(to right, #f1f1f1, #ffffff);
background: linear-gradient(to right, #000000, #103b77);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #fefefe;
font-size: 30px;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;

      @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
font-size: 16px;
  font-weight: 200;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: white;

   @media (max-width: 768px) {
    font-size: 14px;
  }
  
`;