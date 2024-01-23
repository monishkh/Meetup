import React from 'react'

const MeetupContext = React.createContext({
  meetupDetails: [],
  getDetailsOfMeetup: () => {},
})

export default MeetupContext
