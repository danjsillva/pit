import React, { useContext } from "react";

import { AppContext } from "../../App";

export default function AssetLineGoal({ asset }) {
  const { totals } = useContext(AppContext);

  return (
    <div className="d-flex justify-content-between">
      <div>{parseInt(asset.goalAmount)}</div>

      <div className="text-right">
        <div className="font-weight-bold">
          R$ {(parseInt(asset.goalAmount) * parseFloat(asset.price)).toFixed(2)}
        </div>
        <small className="text-muted">
          {((parseInt(asset.grade) / parseInt(totals.grade)) * 100).toFixed()}%
        </small>
      </div>
    </div>
  );
}
