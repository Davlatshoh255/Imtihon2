import React, { useRef, useState } from 'react'
import "./Hard.css"
import { useTranslation } from 'react-i18next'

export const Hard = () => {
  const { t, i18n } = useTranslation()
  let [name, setName] = useState("")
  let [namber, setNamber] = useState("")
  let [email, setEmail] = useState("")
  let chat = {
    chatId: "-1002096036011",
    email: "username",
    content: `Raqamingiz: ${namber}, Email: ${email},  Ismingiz: ${name},  `,
  }

  function sentMessage() {
    fetch(`...`)
      .then(succes => {
        console.log("Send massage");

      }, error => {
        console.log(error)
      })
  }
  return (
    <div className="tontent">
      <div class="input form-control">
        <select>
          <option>Jizzax</option>
          <option>Navoiy</option>
          <option>Buxoro</option>
          <option >Samarqand</option>
          <option >Toshkent</option>
        </select>
        <select>
          <option>Qora qamich</option>
          <option>Oq soy</option>
          <option >Taylox</option>
          <option >Nuroboq</option>
        </select>
      </div>
      <div className="karta">
        <iframe width="860" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=300&amp;height=400&amp;hl=en&amp;q=%20Samarqand%20Buyuk%20Avlod+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://maps-generator.com/ru'></a>
      </div ><br /><br />
      <div className="inputTel">
        <label htmlFor="username">{t("b1")}</label><br />
        <input onChange={e => setNamber(e.target.value)} class="inputtt" type="number" id="username" placeholder='+998500027273' /><br /><br />
        <label htmlFor="pasvord">{t("b2")}</label><br />
        <input onChange={e => setEmail(e.target.value)} class="inputtt" type="text" id="pasvord" placeholder='d.olimjonov35@gmail.com' /><br /><br />
        <label htmlFor="pasvord2">{t("b3")}</label><br />
        <input onChange={e => setName(e.target.value)} class="inputtt" type="text" id="pasvord2" placeholder='Davlat' /><br /><br />
        <button onClick={sentMessage}>{t("t3")}</button>
      </div><br /><br /><br />
    </div>
  )
}
export default Hard