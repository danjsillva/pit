import React from "react";

export default function AssetLineGoal({ asset }) {
  return (
    <div className="d-flex justify-content-between">
      <div>{asset.amountGoal}</div>

      <div className="text-right">
        <div className="font-weight-bold">R$ {asset.appliedGoal}</div>
        <small className="text-muted">{asset.percentGoal}%</small>
      </div>
    </div>
  );
}
