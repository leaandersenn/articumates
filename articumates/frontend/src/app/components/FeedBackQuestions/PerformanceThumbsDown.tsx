import FeedBackBox from "./FeedBackBox";
import './FeedBackQuestions.css'

export default function PerformanceThumbsDown() {
    return (
        <div className="answers">
            <p className="text-l color-white">Why?</p>
            <FeedBackBox text={"Client was not enganged"}></FeedBackBox>
            <FeedBackBox text={"Hard to follow exercises"}></FeedBackBox>
            <FeedBackBox text={"Too challenging"}></FeedBackBox>
            <FeedBackBox text={"Too little challenging"}></FeedBackBox>
        </div>
    )
}