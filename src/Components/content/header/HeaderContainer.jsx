import React from 'react'
import { connect } from 'react-redux'
import s from "./Header.module.css" 
import {setProfileVisible} from "./../../../store/profileReducer"
import {getUserThunkCreator, getUserInfoThunkCreator} from "./../../../store/usersReducer"  
import { Header } from './Header'


class HeaderClass extends React.Component {
  render() {
    return (
      <div>
        {
          <Header user={this.props.user} profileVisible={this.props.profileVisible} setProfileVisible={this.props.setProfileVisible}/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileVisible: state.profilePage.profileVisible,
  }
}



export let HeaderContainer = connect(mapStateToProps, {setProfileVisible, getUserThunkCreator})(HeaderClass);