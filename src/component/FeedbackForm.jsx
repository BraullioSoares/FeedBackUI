import { useState, useEffect } from "react"
import { useContext } from "react"
import FeedbackContext from "./context/FeedbackContext"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)  
  const [message, setMessage] = useState('')
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }

  }, [feedbackEdit])

  const handleTextChange = (e) => {

    if (text === '') {
        setBtnDisabled(true)
        setMessage(null)
        setText('')
    } else if (text !== '' && text.trim().length <= 10) {
        setMessage('Please type at least 10 characteres')
        setBtnDisabled(true)
    } else {
        setMessage(null)
        setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text.trim().length > 10) {
        let newFeedback = {
            text,
            rating
        }

        if (feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
            setBtnDisabled(true)
        } else {
            addFeedback(newFeedback)
        }

    }
    setText('')
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our services?</h2>
            <RatingSelect select={(rating) => {setRating(rating)}}/>
            <div className="input-group">
                <input type="text"
                    value={text}
                    onChange={handleTextChange} 
                    placeholder="Type here..."/>
                <Button type='submit' version='secondary' isDisabled={btnDisabled}>
                    Send!
                </Button>    
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm