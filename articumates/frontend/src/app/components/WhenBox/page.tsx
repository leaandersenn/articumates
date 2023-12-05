import { Card } from "@nextui-org/react";
import './WhenBox.css'


export default function WhenBox() {
    return(
        <Card className="whenboxCard">
            <div className="inputBox">
                <p className="title">Date:</p>
                <input type="date" className="dateBox"></input>
            </div>
            <div className="inputBox">
                <p className="title">Time:</p>
                <input type="time" className="dateBox"></input>
            </div>
            <p>Duration: 1 hour</p>
        </Card>
    );
}