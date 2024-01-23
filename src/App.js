import './App.css'

// These are the lists used in the application. You can move them to any component needed.

import {useState} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import MeetupContext from './context/MeetupContext'

import Meetup from './components/Meetup'
import NotFound from './components/NotFound'
import Register from './components/Register'

// Replace your code here
const App = () => {
  const [meetupDetails, setMeetupDetails] = useState([])

  const getDetailsOfMeetup = (name, category) => {
    setMeetupDetails([...meetupDetails, name, category])
  }

  console.log('data of meetup', meetupDetails && meetupDetails)

  return (
    <MeetupContext.Provider value={{meetupDetails, getDetailsOfMeetup}}>
      <Switch>
        <Route exact path="/" component={Meetup} />
        <Route path="/register" component={Register} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </MeetupContext.Provider>
  )
}

export default App
