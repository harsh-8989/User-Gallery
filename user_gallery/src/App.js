import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AlbumPage from "./components/AlbumPage"
import UserPage from "./components/UserPage"

import PhotoPage from "./components/PhotoPage"
function App() {
  return (
    <div>
      <Router>
        <div className="">
          <Switch>
            <Route
              path="/album/:user/:id"
              render={(props) => <AlbumPage {...props} />}
            />
            <Route
              path="/album/:albumId"
              render={(props) => <PhotoPage {...props} />}
            />
            <Route exact path="/" component={UserPage} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
export default App
