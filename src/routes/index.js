import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Repository from "../views/Repository"
import Upload from "../views/Upload"
export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path="/home" exact>
                    <Repository />
                </Route>
                <Route path="/upload" exact>
                    <Upload />
                </Route>
            </Switch>
        </Router>
    )
}