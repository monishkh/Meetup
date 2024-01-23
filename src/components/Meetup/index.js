import './index.css'

import {Link} from 'react-router-dom'

import MeetupContext from '../../context/MeetupContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Meetup = () => (
  <MeetupContext.Consumer>
    {value => {
      const {meetupDetails} = value
      const condition = meetupDetails.length === 0
      let categoryWord

      topicsList.forEach(e => {
        if (e.id === meetupDetails[1]) {
          categoryWord = e.displayText
        }
      })

      const renderContent = () => {
        console.log('mk')
        return (
          <>
            <div className="meet-up">
              {condition ? (
                <div className="register-box">
                  <h1 className="main-heading">Welcome to Meetup</h1>
                  <p className="caption">Please register for the topic</p>
                  <Link to="/register">
                    <button type="button" className="r-btn">
                      Register
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <h1
                    style={{
                      color: '#2563eb',
                      fontSize: '82px',
                      lineHeight: '1.5',
                      paddingTop: '10px',
                    }}
                  >
                    Hello {meetupDetails && meetupDetails[0]}
                  </h1>
                  <p
                    style={{
                      lineHeight: '2',
                      color: '#64748b',
                      fontSize: '36px',
                      textAlign: 'center',
                      fontWeight: '500',
                    }}
                  >
                    Welcome to {categoryWord}
                  </p>
                </div>
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meetup-img"
              />
            </div>
          </>
        )
      }

      return (
        <>
          <div className="app-page">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
              className="logo-img"
            />
            {/* render content here... */}
            {renderContent()}
          </div>
        </>
      )
    }}
  </MeetupContext.Consumer>
)

export default Meetup
