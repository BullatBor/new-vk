import React from 'react'
import s from "./Profile.module.css"
import closeIcon from "./../../assets/closeIcon.png"

export const Profile = (props) => {
  return (
    <div className={s.profileContainer}>
      <div className={s.profilePage} >
        <div className={s.header}>
          <img src={closeIcon} className={s.close} onClick={() => props.setProfileVisible(false)} />
          <h3>{props.user.fullName}</h3>
        </div>


      </div>
    </div>
  )
}

