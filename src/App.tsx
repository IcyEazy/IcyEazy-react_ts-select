import { useState } from "react";
import Select, { SelectOption } from "./components/Select";

const options = [
  { value: 1, label: "Chocolate" },
  { value: 2, label: "Strawberry" },
  { value: 3, label: "Vanilla" },
  { value: 4, label: "Velvet" },
  { value: 5, label: "Mango" },
  { value: 6, label: "Orange" },
];

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <div>
        <h3>Multiple Select Options</h3>
        <Select
          multiple
          options={options}
          value={value1}
          onChange={(opt) => setValue1(opt)}
        />
      </div>
      <br />
      <div>
        <h3>Single Select Option</h3>
        <Select
          options={options}
          value={value2}
          onChange={(opt) => setValue2(opt)}
        />
      </div>
    </>
  );
}

export default App;
