import React from 'react'
import { NavLink } from 'react-router-dom'
import { DefaulAvatar } from '../../common/DefaultAvatar/DefaulAvatar'
import s from "./FriendsList.module.css"

export const Friend = (props) => {
  return (
    <NavLink to={'/dialogs/' + props.id} className={({ isActive }) => (isActive ? s.activeLink : s.notActiveLink)}>
      <div className={s.userBlock}>
        <div className={s.userInfo}>
          {
            props.image ?
              <img src={props.image} />
              :
              <div className={s.defaultImg}>
                <DefaulAvatar name={props.name} />
              </div>
          }

          <div className={s.descriptions}>
            <h3>{props.name}</h3>
            <span>{props.aboutMe || "Описание"}</span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
