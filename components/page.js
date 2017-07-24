// import Header from './header'
import Meta from './meta'

export default ({ children }) => (
  <div id="main" className="w-75 center">
    <Meta />
    {/*<Header />*/}

    <div className="page avenir">
      { children }
    </div>
  </div>
);
