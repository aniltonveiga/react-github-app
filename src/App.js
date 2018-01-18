import React, { Component } from 'react'
import AppContainer from './components/app-container'
import axios from 'axios'

import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      userinfo: {
        isAvailable: false
      },
      followers: [],
      hasError: false
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  getUserinfo(username){
    return axios.get(`https://api.github.com/users/${username}`)
  }

  getUserFollowers(username){
    return axios.get(`https://api.github.com/users/${username}/followers`)
  }

  handleSearch(e){
    const user = e.target.value;
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if(keyCode === ENTER){
      console.log('Getting API request')
      return axios.all([this.getUserinfo(user), this.getUserFollowers(user)])
      .then((response) => {
          this.setState({
            userinfo: {
              isAvailable: true,
              name: response[0].data.name,
              userUrl: response[0].data.url,
              avatar: response[0].data.avatar_url,
              reposNumber: response[0].data.public_repos,
              followersNumber: response[0].data.followers,
              followingNumber: response[0].data.following
            },
            hasError: false,
            followers: response[1].data
          })
      })
      .catch((error) => {
        if (!error.response) {
          console.log('Erro de conexao')
        } else {
          // http status code
          this.setState({
            userinfo: {
              isAvailable: false
            },
            hasError: true
          })
        }
      })
    }
  }

  render() {
    return <AppContainer
            userinfo={this.state.userinfo}
            followers={this.state.followers}
            handleSearch={this.handleSearch}
            error={this.state.hasError}
          />
  }
}

export default App;
