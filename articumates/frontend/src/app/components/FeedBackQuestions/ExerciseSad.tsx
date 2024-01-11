import FeedBackBox from "./FeedBackBox";
import './FeedBackQuestions.css'

export default function ExerciseSad() {
    return (
        <div className="answers">
            <p className="text-l color-white">Why?</p>
            <FeedBackBox text={"OK"}></FeedBackBox>
            <FeedBackBox text={"Not very fun, not very boring"}></FeedBackBox>
            <FeedBackBox text={"Overdone exercise type"}></FeedBackBox>
            <FeedBackBox text={"Did not stick out"}></FeedBackBox>
        </div>
    )
}