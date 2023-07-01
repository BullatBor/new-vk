import React from 'react'
import { SearchBlock } from './SearchBlock/SearchBlock'
import s from "./Sidebar.module.css"
import { FriendsListContainer } from "./FriendsList/FriendsListContainer"

export const Sidebar = (props) => {
  return (
    <div>
        <div className={s.sidebar}>
            <SearchBlock />
            <FriendsListContainer/>
        </div>
    </div>
  )
}
