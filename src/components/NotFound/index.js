import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
        className="nf-logo-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
        className="nf-img"
      />
      <h1 className="nf-heading">Page Not Found</h1>
      <p className="nt-caption">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)

export default NotFound
