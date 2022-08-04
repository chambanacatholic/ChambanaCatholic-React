import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './info-card.css'

const InfoCard = (props) => {
  return (
    <div className={`info-card-container ${props.rootClassName} `}>
      <div className="info-card-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="info-card-image"
        />
      </div>
      <div className="info-card-container2">
        <span className="info-card-text">{props.info}</span>
        <span className="info-card-text1">{props.description}</span>
        <OutlineButton
          button1="Learn More"
          rootClassName="outline-button-root-class-name2"
          className=""
        ></OutlineButton>
      </div>
    </div>
  )
}

InfoCard.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  image_alt: 'image',
  image_src:
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/02/11/mother-teresa-3.jpg?quality=75&width=982&height=726&auto=webp',
  info: 'Info',
  rootClassName: '',
}

InfoCard.propTypes = {
  description: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  info: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default InfoCard
