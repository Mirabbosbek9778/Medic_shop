import styled from 'styled-components'

const CompanyPage = styled.div`
max-width: 1440px;
margin-top: 40px;

`

const CompanyPageBox = styled.div`
background: linear-gradient(180deg, #F5F5F5, #F5F5F500);
border-radius: 40% 50px 50px 40%;
display: flex;
justify-content: space-between;
align-items: center;

`;

const CompanyPageItemCircle = styled.div`
width: 574px;
height: 574px;
background: #FFFFFF;
border: 40px solid #00C9C933;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50% ;
`

const CompanyPageCircle = styled.div`
width: 91%;
height: 91%;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center ;
`

const CompanyPageItemText = styled.div`
width:770px;
text-align: left;
`
const CompanyBtn = styled.button`
background: linear-gradient(180deg, #0D4C93, #00C9C9);
width: 270px;
height: 50px;
border-radius: 35px;
opacity: 0.9;
font-size: 20px;
font-weight: 400;
color: #FFFFFF;
margin-top: 40px;
`

export { CompanyPage }
export { CompanyPageBox }
export { CompanyPageItemCircle }
export { CompanyPageItemText }
export { CompanyPageCircle }
export {CompanyBtn}
