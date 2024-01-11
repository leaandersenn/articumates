import { Card } from "@nextui-org/react"
import './FeedBackQuestions.css'

interface Text {
    text: string
}

export default function FeedBackBox(props: Text ) {
    return (
        <Card className="feedBackBox" >
           <p className="feedBackText">{props.text}</p>
        </Card>
    )
}