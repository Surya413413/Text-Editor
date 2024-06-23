import styled from 'styled-components'

export const CustomHomeContainer = styled.div`
background-color:#25262c;
background-size:cover;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
`
export const CustomSecondContainer = styled.div`
background-color:#1b1c22;
height:80vh;
width:80%;
border-radius:20px;
display:flex;
justify-content:space-between;

`
export const CustomImage = styled.img`
width:60%;
height:50vh;
`
export const CustomHeading = styled.h1`
color:white;
text-align:center;
`
export const CustomThirdContainer = styled.div`
width:40%;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:20px;
`
export const CustomFourthContainer = styled.div`
background-color:#25262c;

width:50%;
margin:20px;
border:1px solid #cbd5e1;
`
export const Button1 = styled.button`
background-color:transparent;
padding:10px;
margin:10px;
border-width:0px;
cursor:pointer;
 color: ${props => props.color};

`
export const Textarea = styled.textarea`
 border: none;
  outline: none;
  background-color: transparent;
  margin: 20px;
  color: #f1f5f9;
  font-size: 16px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};                  
`
export const Button2 = styled.button`
background-color:transparent;
padding:10px;
margin:10px;
border-width:0px;
cursor:pointer;
 color: ${props => props.color};
`
export const Button3 = styled.button`
background-color:transparent;
padding:10px;
margin:10px;
border-width:0px;
cursor:pointer;
 color: ${props => props.color};
`
export const CustomUnorderList = styled.ul`
 list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-left: 0px;
  margin: 10px;
`
