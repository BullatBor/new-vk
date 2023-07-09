import React from 'react'
import { connect } from 'react-redux'
import s from "./Dialog.module.css" 
import {setProfileVisible} from "../../../store/profileReducer"
import { Dialog} from './Dialog'

const  DialogCont = (props) => {
    return (
      <div className={s.dialogContainer}>
        <Dialog setProfileVisible={props.setProfileVisible}/>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    profileVisible: state.profilePage.profileVisible
  }
}


export let DialogContainer = connect(mapStateToProps, {setProfileVisible})(DialogCont);