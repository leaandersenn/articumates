import PersonasCard from "./PersonasCard";
import "../styling/PersonasCardContainer.css";

export default function PersonasCardContainer() {
  return (
    <div className="container">
      <div>
        <PersonasCard></PersonasCard>
      </div>
      <div>
        <PersonasCard></PersonasCard>
      </div>
      <div>
        <PersonasCard></PersonasCard>
      </div>
    </div>
  );
}
