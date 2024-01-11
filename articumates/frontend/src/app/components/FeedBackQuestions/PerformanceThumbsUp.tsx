import FeedBackBox from "./FeedBackBox";
import './FeedBackQuestions.css'

export default function PerformanceThumbsUp() {
    return (
        <div className="answers">
            <p className="text-l color-white">Why?</p>
            <FeedBackBox text={"Client was enganged"}></FeedBackBox>
            <FeedBackBox text={"Audible improvements during exercise"}></FeedBackBox>
            <FeedBackBox text={"Followed exercise with ease"}></FeedBackBox>
            <FeedBackBox text={"Appropriately challenging"}></FeedBackBox>
        </div>
    )
}