import React from 'react'
import PropTypes from 'prop-types';

const UserInfo = ({userinfo}) => (
  <div className="card--header">
    <img alt="" src={userinfo.avatar}/>
    <a href={userinfo.userUrl}>{userinfo.name}</a>
    <ul className="card--infos">
      <li><p>{userinfo.reposNumber}</p>Repositorios</li>
      <li><p>{userinfo.followersNumber}</p>Seguidores</li>
      <li><p>{userinfo.followingNumber}</p>Seguindo</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    userUrl: PropTypes.string.isRequired,
    reposNumber: PropTypes.number.isRequired,
    followersNumber: PropTypes.number.isRequired,
    followingNumber: PropTypes.number.isRequired
  })
}

export default UserInfo
