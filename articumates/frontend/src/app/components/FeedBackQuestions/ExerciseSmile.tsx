import FeedBackBox from "./FeedBackBox";
import './FeedBackQuestions.css'

export default function ExerciseSmile() {
    return (
        <div className="answers">
            <p className="text-l color-white">Why?</p>
            <FeedBackBox text={"Funny"}></FeedBackBox>
            <FeedBackBox text={"Something new"}></FeedBackBox>
            <FeedBackBox text={"Engaging exercises"}></FeedBackBox>
            <FeedBackBox text={"Mastered the exercises"}></FeedBackBox>
        </div>
    )
}