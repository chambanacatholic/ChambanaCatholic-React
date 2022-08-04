import React from 'react'

import PropTypes from 'prop-types'

import './church-card.css'

const ChurchCard = (props) => {
  return (
    <div className={`church-card-container ${props.rootClassName} `}>
      <div className="church-card-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="church-card-image"
        />
        <div className="church-card-container2">
          <div className="church-card-container3">
            <h1 className="church-card-text">{props.heading}</h1>
            <span className="church-card-text1">{props.description}</span>
            <span className="church-card-text2">{props.address}</span>
            <a
              href={props.website}
              target="_blank"
              rel="noreferrer noopener"
              className="church-card-link"
            >
              {props.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

ChurchCard.defaultProps = {
  heading: 'Heading',
  image_alt: 'image',
  rootClassName: '',
  website: 'https://example.com',
  text: 'Link',
  description: 'Text',
  image_src: '/playground_assets/cyp%20icon-300w.png',
  address: 'Text',
}

ChurchCard.propTypes = {
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  website: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  image_src: PropTypes.string,
  address: PropTypes.string,
}

export default ChurchCard
