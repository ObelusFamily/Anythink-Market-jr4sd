import React from "react";
import { useEffect, useState } from "react";
import { SEARCH_FILTER } from "../../constants/actionTypes";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  onKeypress: (type, payload) =>
    dispatch({ type, payload }),
});

const Banner = (props) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search.length >= 3){
      props.onKeypress(SEARCH_FILTER, search)
    }  
  }, [search]);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input type="text" id='search-box' placeholder="What is it that you really desire"
                 onChange={e => setSearch(e.target.value)}>
          </input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Banner);
