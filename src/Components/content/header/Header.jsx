import React from 'react'
import { DefaulAvatar } from '../../common/DefaultAvatar/DefaulAvatar';
import s from "./Header.module.css"

export const Header = (props) => {
  const SetProfileVisible = () => {
    props.setProfileVisible(true);
  }
  return (
    <div className={s.header} onClick={SetProfileVisible}>
      <div className={s.headerInfo}>
        {
          props.user.photos.large !== null ?
            <img src={props.user.photos.large || "https://cdn.fishki.net/upload/post/201408/25/1297423/20.jpg"} />
            :
            props.user.fullName && <div className={s.headerImg}>
              <DefaulAvatar name={props.user.fullName} />
            </div>
        }
        <div className={s.title}>
          {
            props.user !== null ? <h3>{props.user.fullName}</h3> : <span>dsfsdf</span>
          }
          <span className={s.userStatus}>was 20 minutes ago</span>
        </div>
      </div>
    </div>
  )
}
