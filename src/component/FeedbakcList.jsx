import FeedbackItem from "./FeedbackItem"
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
import Spinner from "./shared/Spinner"

function FeedbakcList() {
  const { feedback, isLoading } = useContext(FeedbackContext)
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No data yet</p>
    }

  return isLoading ? (
    <Spinner/>
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} 
          item={item}/>
      })}
    </div>
  )
}

export default FeedbakcList