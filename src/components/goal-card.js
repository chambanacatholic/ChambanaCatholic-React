import React from 'react'

import PropTypes from 'prop-types'

import './goal-card.css'

const GoalCard = (props) => {
  return (
    <div className={`goal-card-container ${props.rootClassName} `}>
      <div className="goal-card-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="goal-card-image"
        />
        <span className="goal-card-text">{props.goal}</span>
      </div>
      <div className="goal-card-container2">
        <span className="goal-card-text1">{props.description}</span>
        <span className="goal-card-text2">{props.description1}</span>
      </div>
    </div>
  )
}

GoalCard.defaultProps = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  goal: 'Goal',
  rootClassName: '',
  image_alt: 'image',
  image_src:
    'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/02/11/mother-teresa-3.jpg?quality=75&width=982&height=726&auto=webp',
  description1: 'Verse',
}

GoalCard.propTypes = {
  description: PropTypes.string,
  goal: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  description1: PropTypes.string,
}

export default GoalCard
