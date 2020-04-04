import React, { useContext, useState } from "react";

import { AppContext } from "../../App";

export default function AssetLineGrade({ asset, onChangeAsset }) {
  const { totals } = useContext(AppContext);
  const [grade, setGrade] = useState(asset.grade);

  function handleChangeGrade(event) {
    setGrade(event.target.value);
  }

  function handleBlurGrade(event) {
    if (grade < 0) {
      setGrade(0);
    }

    onChangeAsset({
      grade: event.target.value,
      goalAmount:
        (parseFloat(totals.broker) *
          (parseInt(asset.grade) / parseInt(totals.grade))) /
        parseFloat(asset.price)
    });
  }

  return (
    <input
      type="number"
      value={grade}
      onChange={handleChangeGrade}
      onBlur={handleBlurGrade}
      className="form-control col input-inline"
    />
  );
}
