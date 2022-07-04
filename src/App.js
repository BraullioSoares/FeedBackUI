import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import Header from "./component/Header";
import FeedbakcList from "./component/FeedbakcList";
import FeedbackStats from "./component/FeedbackStats"
import FeedbackForm from "./component/FeedbackForm";
import { FeedbackProvider } from "./component/context/FeedbackContext";

function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbakcList />    
                            </>
                        }>
                            
                        </Route>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App;