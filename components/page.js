import Navigation from './navigation'
import Meta from './meta'

export default ({ children }) => (
  <div>
    <Meta />
    <Navigation />

    <div id="main" className="w-75 center">
      <div className="page avenir">
        { children }
      </div>
    </div>
  </div>
);
