import React from 'react'
import { connect } from 'react-redux'
import s from "./Profile.module.css" 
import {setProfileVisible} from "../../store/profileReducer"
import { Profile } from './Profile'

class ProfileClass extends React.Component {
  render() {
    return (
      <div className={s.profileContainer}>
        <Profile setProfileVisible={this.props.setProfileVisible}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileVisible: state.profilePage.profileVisible
  }
}


export let ProfileContainer = connect(mapStateToProps, {setProfileVisible})(ProfileClass);