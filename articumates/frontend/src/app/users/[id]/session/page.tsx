import ProfileInfo from "@/app/components/ProfileInfo/ProfileInfo";
import WhenBox from "@/app/components/WhenBox/page";
import { Fragment } from "react";


export default function Session() {
    return(
        <Fragment>
            <WhenBox />
            <ProfileInfo userID={1} />
        </Fragment>
    );
}