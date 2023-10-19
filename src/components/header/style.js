import styled from "styled-components";

const HeaderApp = styled.div`
margin: auto;
height: 980px;
background-image: url(/src/assets/images/HeaderImg.png);
`

const HeaderBox = styled.div`
height: 78%;
width: 1440px;
display: flex;
align-items: center;
margin: auto;
`

const HeaderItem = styled.div`
width: 680px;

`

const HeaderCircle = styled.div`
width: 479px;
position: absolute;
inset: 0;
transform: translate(137px, 53px);
background-image: url(/src/assets/images/HeaderCircle.png );
background-repeat: no-repeat;
background-size: contain;
z-index: -1;
`

const HeaderItemPosition = styled.div`
width: 700px;
height: 520px;
position: relative;
`

const StyledHeading = styled.h1`
font-size: 50px;
letter-spacing: 4px;
line-height: 59px;
font-weight: 500;
color: #0D4C93;
`

const HeaderStyledText = styled.p`
font-size: 24px;
font-weight: 400;
color: #363535;
margin-top: 20px;
`

const HeaderItemButton = styled.button`
width: 270px;
height: 70px;
font-size: 24px;
font-weight: 500;
background: linear-gradient(180deg, #0D4C93, #00C9C9);
border-radius: 35px;
opacity: 0.9;
color: #FFFFFF;
margin-top: 40px;
`

export { HeaderBox }
export { HeaderItem }
export { HeaderCircle }
export { HeaderApp }
export { HeaderItemPosition }
export { HeaderItemButton }

export { StyledHeading }
export { HeaderStyledText }