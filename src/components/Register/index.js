import './index.css'
import {useState} from 'react'
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

const initial = topicsList[0].id

const Register = props => {
  const [topicValue, setTopicValue] = useState(initial)
  const [err, setErr] = useState('')
  const [inputValue, setInputValue] = useState('')

  return (
    <MeetupContext.Consumer>
      {value => {
        const {getDetailsOfMeetup} = value

        const {history} = props

        const handelSubmit = e => {
          e.preventDefault()
          if (inputValue === '') {
            setErr('Please enter your name')
          } else {
            getDetailsOfMeetup(inputValue, topicValue)
            history.replace('/')
          }
        }

        const registerFrom = () => (
          <>
            <div className="login-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="r-img"
              />
              {/* form container */}
              <div className="lg-card">
                <h1 className="lg-heading">Let us join</h1>
                <form onSubmit={handelSubmit}>
                  <div>
                    <label htmlFor="name">NAME</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="topics">TOPICS</label>
                    <br />
                    <select
                      id="topics"
                      value={topicValue}
                      onChange={e => setTopicValue(e.target.value)}
                    >
                      {topicsList.map(e => (
                        <option key={e.id} value={e.id}>
                          {e.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="rg-btn">
                    Register Now
                  </button>
                  <p>{err && err}</p>
                </form>
              </div>
            </div>
          </>
        )

        return (
          <>
            <div className="register-page">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
                className="r-logo-img"
              />
              {/* render register from */}
              {registerFrom()}
            </div>
          </>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Register
