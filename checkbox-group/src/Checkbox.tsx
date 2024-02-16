import React, { FC, useReducer } from "react";
import {
  reducer,
  initialState,
  INewBills,
  useGetBillLabels,
} from "./Checkbox.utils";

const Checkbox: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const checkboxes = Object.entries(state).map((checkbox) => checkbox);

  const onSubmit = () => {
    const payload: INewBills = {
      billNos: [],
      ...state,
    };
    console.log(payload);
  };
  const labels = useGetBillLabels();
  return (
    <div>
      {checkboxes.map((checkbox) => (
        <div key={checkbox[0]}>
          <input
            type="checkbox"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: checkbox[0], payload: e.target.checked })
            }
            checked={checkbox[1]}
          />
          <label>{labels[checkbox[0]]}</label>
        </div>
      ))}
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Checkbox;
