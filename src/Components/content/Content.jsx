import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setProfileVisible } from "../../store/profileReducer"
import s from "./Content.module.css"
import { DialogContainer } from './dialog/DialogContainer'
import { HeaderContainer } from './header/HeaderContainer'
import { getUserInfoThunkCreator } from "./../../store/usersReducer"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Profile } from '../profile/Profile'
import { useEffect } from 'react'
import { Header } from './header/Header'

const Content = (props) => {
  useEffect(() => {
    props.getUserInfoThunkCreator(props.router.params.userId)
  }, [props.router.params.userId])

  return (
    props.isFetching
      ?
      <div>
        <div className={s.content}>
          <div className={s.dialogPage}>
            <Header user={props.userInfo} setProfileVisible={props.setProfileVisible} />
            <DialogContainer />
          </div>
          {
            props.profileVisible &&
            <Profile user={props.userInfo} setProfileVisible={props.setProfileVisible} />
          }
        </div>
      </div>
      :
      <div className={s.defaultContent}>
      <span>ssdfa</span>
      </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  profileVisible: state.profilePage.profileVisible,
  userInfo: state.usersPage.userProfile,
  isFetching: state.usersPage.isFetching
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }
  return ComponentWithRouterProp;
}


const ContentContainer = compose(connect(mapStateToProps, { getUserInfoThunkCreator, setProfileVisible }),
)(withRouter(Content))

export default ContentContainer;