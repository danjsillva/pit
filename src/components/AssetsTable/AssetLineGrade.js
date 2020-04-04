import React from "react";

export default function AssetLineGrade({ asset, onChangeAsset }) {
  return (
    <input
      type="number"
      value={asset.grade}
      onChange={e =>
        onChangeAsset({
          grade: e.target.value
        })
      }
      className="form-control col input-inline"
    />
  );
}
