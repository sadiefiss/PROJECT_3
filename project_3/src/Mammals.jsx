import { useState } from "react";

const Mammals = () => { 
//set up state for mammals data
const [mammalsData, setMammalsData] = useState ([]);
  return (
    <div>
      <p>Pennsylvania Native Mammals</p>
    </div>
  );
};

export default Mammals;