import React from 'react'
import { connect } from 'react-redux'
import { Friend } from './Friend'
import s from "./FriendsList.module.css" 
import {getUserThunkCreator} from "./../../../store/usersReducer" 

class FriendsList extends React.Component {
  componentDidMount(){
    this.props.getUserThunkCreator()
  }
  render() {
    return (
      <div className={s.usersList}>
        <div className={s.scrollList}>
          <ul>
          {
              this.props.users.map(item => {
                  return <Friend key={item.id} name={item.name} id={item.id} image={item?.photos?.large} aboutMe={item.aboutMe}/>
              })
          }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}


export let FriendsListContainer = connect(mapStateToProps, {getUserThunkCreator})(FriendsList);