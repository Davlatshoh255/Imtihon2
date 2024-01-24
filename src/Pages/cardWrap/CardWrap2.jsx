import React from 'react'
import "./CardWrap.css"
import Text from '../../Attachments/Text/Text'
import TextTwo from '../../Attachments/Textaa/textaa2'
import AdditionalCard from '../../Attachments/DivCard/DivCard'


const GoodsCW = ({ children }) => {
    return (
        <div className="Cardwrap">
            <Text />
            {children}
            <TextTwo />
            <AdditionalCard/>
        </div>
    )
}

export default GoodsCW