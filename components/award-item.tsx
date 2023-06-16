import { IAwardItem } from "@/helpers/interfaces";
export default function AwardItem({ item }: { item: IAwardItem }) {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-between resume-section-item">
        <div className="flex-grow-1">
          <h3 className="mb-0 text-dark">{item.title}</h3>
          <h5 className="">{item.year}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    </>
  );
}
