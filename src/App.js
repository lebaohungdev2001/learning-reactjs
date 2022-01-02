import logo from "./logo.svg";
import queryString from "query-string";
import "./App.css";
import PostList from "./features/PostList";
import { useEffect, useState } from "react";
import Pagination from "./features/pagination";
import ColorBox from "./features/ColorBox";
import Album from "./features/Album";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });
  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramsString = queryString.stringify(filters);
        const requestApi = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestApi);
        const responseJson = await response.json();
        const { data, pagination } = responseJson;

        setPostList(data);
        setPagination(pagination);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPostList();
  }, [filters]);
  function handlepageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  return (
    <div className="App">
      <p>header</p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/color-box">Color box</Link>
      </p>
      <p>
        <Link to="/album">Album</Link>
      </p>
      {/* <Switch> */}
      <Route path="/" component={Pagination} />
      <Route path="/color-box" component={ColorBox} />
      <Route path="/color-box/123" component={ColorBox} />
      <Route path="/album" component={Album} />
      {/* </Switch> */}
      <p>footer</p>
    </div>
  );
}

export default App;
