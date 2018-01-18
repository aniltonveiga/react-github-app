import React from 'react'
import PropTypes from 'prop-types';

const Followers = ({title, followers}) => (
  <div className='followers'>
    {followers.length === 0 && <p>Esse usuário não possui nenhum seguidor no <strong>gitHub</strong></p>}
    {followers.length !== 0 && <h2>{title}:</h2>}
    <ul>
      {followers.map((follower, index) => (
        <li className="followers" key={follower.id}> <a target='blank' href={follower.html_url}><img alt={follower.login} src={follower.avatar_url}/></a></li>
      ))}
    </ul>
  </div>
)


Followers.propTypes = {
  title: PropTypes.string.isRequired,
  followers: PropTypes.array
}

export default Followers
