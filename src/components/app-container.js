import React from 'react'
import PropTypes from 'prop-types';
import Search from './search'
import UserInfo from './user-info'
import Followers from './followers'
import NotFound from './not-found'
import Logo from './logo'

const AppContainer = ({userinfo,handleSearch,followers,error}) => (
  <div className='App card'>
      <Search handleSearch={handleSearch}/>
      {userinfo.isAvailable === false && <Logo/>}
      {!!error && <NotFound />}
      {!!userinfo.isAvailable && <UserInfo userinfo={userinfo}/>}
      {!!userinfo.isAvailable && <Followers title='Followers' followers={followers} />}
  </div>
)

AppContainer.propTypes = {
  userinfo: PropTypes.object,
  followers: PropTypes.array
}

export default AppContainer
