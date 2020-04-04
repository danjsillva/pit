import React, { useState } from "react";

export default function AssetLineGrade({ asset, onChangeAsset }) {
  const [grade, setGrade] = useState(asset.grade);

  function handleChangeGrade(event) {
    onChangeAsset({
      grade: event.target.value
    });
  }

  return (
    <input
      type="number"
      value={grade}
      onChange={e => setGrade(e.target.value)}
      onBlur={handleChangeGrade}
      className="form-control col input-inline"
    />
  );
}
