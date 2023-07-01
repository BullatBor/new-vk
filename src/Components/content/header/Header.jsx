import React from 'react'
import s from "./Header.module.css"

export const Header = (props) => {
  const SetProfileVisible = () => {
    props.setProfileVisible(true);
  }
  return (
    <div className={s.header} onClick={SetProfileVisible}>
      <div className={s.headerInfo}>
        <img src={ props.user.photos.large || "https://i.pinimg.com/originals/59/49/55/5949555c77ebbcf47b25909c954b2f10.jpg"} />
        <div className={s.title}>
          <h3>{props.user.fullName}</h3>
          <span className={s.userStatus}>was 20 minutes ago</span>
        </div>
      </div>
    </div>
  )
}
