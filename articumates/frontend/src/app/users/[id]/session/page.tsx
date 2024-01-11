import ProfileInfo from "@/app/components/ProfileInfo/ProfileInfo";
import WhenBox from "@/app/components/WhenBox/page";
import { Fragment } from "react";
import './whenProfile.css'


export default function Session() {
    return(
        <div className="whenProfile">
            <WhenBox />
            <ProfileInfo userID={1} />
        </div>
    );
}