import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import getAppStore from './store/store'
import { addAnimal } from './actions/animals'
import './styles/styles.scss'

import { Provider } from 'react-redux'

const store = getAppStore()

store.dispatch(addAnimal({
  name: 'Lucky',
  species: 'Lion',
  description: 'Like all cats, lions rest or sleep about 20 hours each day to conserve their energy. Unlike most cats, lions are a highly social species. Typically, they live in prides that consist of a few adult males with several related females and their young.',
  date: '09/11/2005'
}))

store.dispatch(addAnimal({
  name: 'Stripey',
  species: 'Zebra',
  description: 'The stripe pattern of a Grevy\'s zebra is as distinctive as human fingerprints. It is also the most important adaptation for its survival, as movements of stripes within the herd are very confusing to a predator.',
  date: '06/06/2001'
}))

store.dispatch(addAnimal({
  name: 'Hungry Hungry',
  species: 'Hippopotamus',
  description: 'The hippo is the "King of the River," spending most of its time in the water, coming out to graze at night on the grass.',
  date: '04/23/1992'
}))

store.dispatch(addAnimal({
  name: 'Sarah',
  species: 'Seal',
  description: 'Harbor seal pups able to swim at birth and after only a few days are able to dive for up to two minutes. Harbor seals are part of the “true seal” family, characterized by their lack of external ears as well as limited locomotion on land due to small forelimbs.',
  date: '01/05/1980'
}))

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(template, document.getElementById('app'))
