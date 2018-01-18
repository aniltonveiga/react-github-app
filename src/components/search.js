import React from 'react'
import PropTypes from 'prop-types';


const Search = ({handleSearch}) => (
  <div className="search--box">
     <label>
      <input
        type="search"
        placeholder="Digite um usuário + Enter"
        onKeyUp={handleSearch}
      />
     </label>
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default Search
