import React from 'react'
import {
    HeaderApp, HeaderBox, HeaderItem, HeaderCircle,
    StyledHeading, HeaderStyledText, HeaderItemPosition, HeaderItemButton
} from './style'
import Navbar from '../navbar/Navbar'
import HeaderItemImg from '/src/assets/images/HeaderItem.png'

const Header = () => {
    return (
        <HeaderApp>
            <Navbar />
            <HeaderBox>
                <HeaderItem>
                    <StyledHeading >Анализатор <br />
                        ABL800 FLEX</StyledHeading>
                    <HeaderStyledText>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</HeaderStyledText>
                    <HeaderItemButton>Подробнее</HeaderItemButton>
                </HeaderItem>
                <HeaderItemPosition>

                    <img src={HeaderItemImg} alt="" />
                    <HeaderCircle></HeaderCircle>
                </HeaderItemPosition>

            </HeaderBox>
        </HeaderApp>
    )
}

export default Header