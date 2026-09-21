import { useState } from "react";
import InputText from "./sub/InputText";
import PilOption from "./sub/PilOption";

function PromptGenerator() {
  //
  const [niche, setNiche] = useState("");
  const [style, setStyle] = useState("");
  const [quantity, setQuantity] = useState(30);

  const quantities = [10, 20, 30, 40, 50];

  return (
    <div className="card">
      <h1 className="card-headline">New Project</h1>

      <InputText
        label={"Niche"}
        placeholder={"Your niche here...."}
        id={"niche-input"}
        value={niche}
        onChange={(e) => setNiche(e.target.value)}
      />

      <InputText
        label={"Style"}
        placeholder={"Your style here...."}
        id={"style-input"}
        value={style}
        onChange={(e) => setStyle(e.target.value)}
      />

      <div>
        <h1 className="label">Quantity</h1>
        <PilOption
          options={quantities}
          value={quantity}
          onChange={setQuantity}
        />
      </div>

      <button className="btn-primary btn-small mt-2">Start New Project</button>
{/* 
      <button className="btn-small btn-secondary">Download Prompt.txt</button> */}
    </div>
  );
}

export default PromptGenerator;
