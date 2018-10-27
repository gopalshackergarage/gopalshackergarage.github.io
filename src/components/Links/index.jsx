import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      twitter: author.twitter,
      github: author.github,
      linkedin: author.linkedin,
      rss: author.rss,
      email: author.email
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`${links.twitter}`} target="_blank">
              <i className="icon-twitter"/>
            </a>
          </li>
          <li className="links__list-item">
            <a href={`${links.linkedin}`} target="_blank">
              <i className="icon-linkedin"/>
            </a>
          </li>
          <li className="links__list-item">
            <a href={`${links.github}`} target="_blank">
              <i className="icon-github"/>
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail"/>
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss"/>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
