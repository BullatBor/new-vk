import React, { useState } from 'react'
import s from "./Profile.module.css"
import closeIcon from "./../../assets/closeIcon.png"
import { DefaulAvatar } from '../common/DefaultAvatar/DefaulAvatar'
import classNames from "classnames"

export const Profile = (props) => {
  const [item, setItem] = useState("media");
  return (
    <div className={s.profileContainer}>
      <div className={s.profilePage} >
        <div className={s.header}>
          <img src={closeIcon} className={s.close} onClick={() => props.setProfileVisible(false)} />
          <h3>User Info</h3>
        </div>
        <div className={s.userImg}>
          {
            props.user.photos.large
              ?
              <div className={s.defaultImg}>
                <img src={props.user.photos.large}/>
              </div>
              :
              <div className={s.defaultImg}>
                <DefaulAvatar name={props.user.fullName} />
              </div>
          }
          <div className={s.userName}>
            <h3>{props.user.fullName}</h3>
            <span>last seen recently </span>
          </div>
        </div>
        <div className={s.userContacts}>
          <div className={s.contactsBtn}>
            <span>Контакты</span>
          </div>
        </div>
      </div>
      <div className={s.profileMedia}>
        <div className={s.mediaItems}>
          <GroupItem name={'Медиа'} itemClass={"media"} item={item} setItem={setItem} />
          <GroupItem name={'Файлы'} itemClass={"file"} item={item} setItem={setItem} />
          <GroupItem name={'Ссылки'} itemClass={"link"} item={item} setItem={setItem} />
          <GroupItem name={'Музыка'} itemClass={"music"} item={item} setItem={setItem} />
          <GroupItem name={'Голос'} itemClass={"voice"} item={item} setItem={setItem} />
          <GroupItem name={'Группы'} itemClass={"group"} item={item} setItem={setItem} />
        </div>
        <div className={s.mediaPhotos}>
          {
            item === "media" && <img src={props.user.photos.large}/>          
          }
          {
            item === "media" && <img src={props.user.photos.large}/>          
          }
          {
            item === "media" && <img src={props.user.photos.large}/>          
          }
        </div>
      </div>
    </div>
  )
}

const GroupItem = (props) => {
  return (
    <div className={classNames(s.mediaItem, props.item == props.itemClass ? s.activeItem : s.notActiveItem)}
      onClick={() => props.item != props.itemClass && props.setItem(props.itemClass)}
    >
      {props.name}
    </div>
  )
}
