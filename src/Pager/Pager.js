import "./Pager.css";

import RadioButtons from "components/RadioButtons/RadioButtons";

const Pager = ({ page, setPage, totalPages }) => {
  const options = [...Array.from({ length: totalPages }).keys()].map((idx) => [
    idx + 1,
    idx,
  ]);

  return (
    <div className="pager">
      <RadioButtons value={page} setValue={setPage} options={options} />
    </div>
  );
};

export default Pager;
