import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {setProfileVisible} from "../../store/profileReducer"
import s from "./Content.module.css"
import { DialogContainer } from './dialog/DialogContainer'
import { HeaderContainer } from './header/HeaderContainer'
import { getUserInfoThunkCreator } from "./../../store/usersReducer"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Profile } from '../profile/Profile'

export class Content extends Component {
  componentDidMount() {
    this.props.getUserInfoThunkCreator(this.props.router.params.userId);
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.router.params.userId != prevProps.router.params.userId){
      this.props.getUserInfoThunkCreator(this.props.router.params.userId);
    }  
}

  render() {
    return (
      this.props.isFetching &&
      <div>
        <div className={s.content}>
          <div className={s.dialogPage}>
            <HeaderContainer user={this.props.userInfo}/>
            <DialogContainer />
          </div>
          {
            this.props.profileVisible &&
            <Profile user={this.props.userInfo} setProfileVisible={this.props.setProfileVisible}/>
          }
        </div>
      </div>
    )
  }
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