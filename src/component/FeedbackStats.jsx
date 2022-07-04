import {useContext} from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  let average = feedback.reduce((acc, cur) => {
      return acc + cur.rating
  }, 0) / feedback.length

  return (
    <div className="feedback-stats">
        <h4>Feedback Items: {feedback.length}</h4>
        <h4>Feedback Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats