import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./FriendsList.module.css"

export const Friend = (props) => {
  return (
    <NavLink to={'/dialogs/' + props.id} className={({ isActive }) => (isActive ? s.activeLink : s.notActiveLink)}>
      <div className={s.userBlock}>
        <div className={s.userInfo}>
          <img src={props.image || "https://i.pinimg.com/originals/59/49/55/5949555c77ebbcf47b25909c954b2f10.jpg"} />
          <div className={s.descriptions}>
            <h3>{props.name}</h3>
            <span>{props.aboutMe || "Описание"}</span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
