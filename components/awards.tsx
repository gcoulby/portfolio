import AwardItem from "./award-item";
import { IAwardItem } from "@/helpers/interfaces";
export default function Awards() {
  const awards: IAwardItem[] = [
    {
      title: "Ede and Ravenscroft Prize",
      year: "2015",
      description: "Awarded for best best academic performance in level six Computer Science and Digital Technologies.",
    },
    {
      title: "Volunteer Teacher of the Year",
      year: "2014",
      description: "Awarded whilst volunteering as an English as a Foreign Language (EFL) teacher in the Republic of Georgia.",
    },
  ];
  return (
    <>
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
          <h2 className="mb-5">Awards</h2>

          {awards.map((award, i) => (
            <AwardItem key={`award-item-${i}`} item={award} />
          ))}
        </div>
      </section>
    </>
  );
}
