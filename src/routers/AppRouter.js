import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import Animals from '../components/Animals'
import AddAnimal from '../components/AddAnimal'
import EditAnimal from '../components/EditAnimal'
import NotFound from '../components/NotFound'

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={Animals} exact={true} />
                <Route path="/add" component={AddAnimal} />
                <Route path="/animal/:id" component={EditAnimal} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter
