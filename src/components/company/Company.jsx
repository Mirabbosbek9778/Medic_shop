import React from 'react'
import { CompanyPage, CompanyPageBox, CompanyPageItemCircle, CompanyPageItemText, CompanyPageCircle, CompanyBtn } from './Company.js'
import siteLogo from '/src/assets/images/logo.png'


const Company = () => {
    return (
        <CompanyPage>
            <h1 style={{ fontSize: "40px", fontWeight: "500", color: "#0D4C93", textAlign: "center", paddingBottom: "40px" }}>О КОМПАНИИ</h1>

            <CompanyPageBox>
                <CompanyPageItemCircle>
                    <CompanyPageCircle style={{ border: "40px solid #0D4C9333", }}>
                        <CompanyPageCircle style={{ border: "40px solid #78DFF233", padding: "30px" }}>
                            <img src={siteLogo} alt="No image" />
                        </CompanyPageCircle>
                    </CompanyPageCircle>
                </CompanyPageItemCircle>

                <CompanyPageItemText >
                    <p style={{color: "#363535", fontSize: "20px", fontWeight: "300", letterSpacing: "3px"}}>Группа компаний MEDOL создавалась высококвалифицированными специалистами в
                         сфере медицины, инженерии и экономики, за плечами которых значительный опыт 
                         на рынке высоких медицинских технологий, которая имеет свои представительства
                          в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО
                           “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес,
                            принести пользу обществу путем развития и внедрения передовых технологий в систему
                             здравоохранения Республики Узбекистан. </p>

                             <CompanyBtn>Узнать больше</CompanyBtn>
                </CompanyPageItemText>
            </CompanyPageBox>
        </CompanyPage>
    )
}

export default Company