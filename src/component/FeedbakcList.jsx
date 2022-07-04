import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbakcList({handleDelete}) {
  const { feedback } = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p>No data yet</p>
    }
  return (
    <div className="feedback-list">
        {feedback.map((item) => {
           return <FeedbackItem key={item.id} 
            item={item}/>
        })}
    </div>
  )
}

export default FeedbakcList