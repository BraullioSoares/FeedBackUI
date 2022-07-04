import Card from "../component/shared/Card"
import { Link } from "react-router-dom"

function AboutPage() {
  return (
    <Card>
        <h1>About Us</h1>
        <p>This is the about us page</p>
        <Link to="/">Go back</Link>
    </Card>
  )
}

export default AboutPage