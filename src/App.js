import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App card'>
        <div className='search-box'>
          <label>
            <input type='search' placeholder='Digite um usuário + Enter' />
          </label>
        </div>
        
        <div className='card-header'>
          <img alt='' src='https://avatars3.githubusercontent.com/u/2703782?v=4' />
          <a href='#' target='_blank'>Anilton Veiga</a>
          <ul>
            <li><p>160</p> Repositórios</li>
            <li><p>160</p> Repositórios</li>
            <li><p>160</p> Repositórios</li>
          </ul>
        </div>
        
        <div className='followers'>
          <h2>Followers</h2>
          <ul>
            <li>
              <a href='#'>
                <img alt=''  src='https://avatars3.githubusercontent.com/u/2703782?v=4' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
