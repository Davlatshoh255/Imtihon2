
import "./Card1.css"
import { useTranslation } from 'react-i18next'



const GoodsC = ({ img, title, info }) => {
  const { t, i18n } = useTranslation()



  return (
    <div className="card_Page">
      <div className="img">
        <img src={img}/>
      </div>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="info">
        <p>{info}$</p>
      </div>
      <a href="/Hard"><button>{t("ttt")}</button></a>
   
      
    </div >


  )
}

export default  GoodsC