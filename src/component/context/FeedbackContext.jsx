import {createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
        setIsLoading(false)
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch ('/feedback?_sort=1&_order=desc')
        const data = await response.json()
        setFeedback(data)
    }

    const deleteFeedback =  async (id) => {
        if (window.confirm('Are you sure you want to delete it.')) {
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setFeedback(
            feedback.map((item) => item.id === id ? {...item, ...data} : item)
        )
    }
    return (
        <FeedbackContext.Provider
            value={
                {
                    feedback,
                    feedbackEdit,
                    isLoading,
                    addFeedback,
                    deleteFeedback,
                    editFeedback,
                    updateFeedback
                }}>
                {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext

