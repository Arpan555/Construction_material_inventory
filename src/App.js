import React from 'react'
import { BrowserRouter ,Switch , Route } from 'react-router-dom'
import Home from './Components/Home'
import Show from "./Components/Show"
import ShowDetails from './Components/ShowDetails'
import Edit from "./Components/Edit"
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/show" component={Show}/>
                    <Route exact path="/show/:id" component={ShowDetails}/>
                    <Route exact path="/edit" component={Edit}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default App
