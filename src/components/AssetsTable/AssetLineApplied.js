import React, { useContext, useState } from "react";

import { AppContext } from "../../App";

export default function AssetLineApplied({ asset, onChangeAsset }) {
  const { totals } = useContext(AppContext);
  const [percent, setPercent] = useState(0);

  function handleChangeAmount(event) {
    onChangeAsset({ appliedAmount: event.target.value });

    setPercent(
      ((parseInt(event.target.value) * parseFloat(asset.price)) /
        parseFloat(totals.applied)) *
        100
    );
  }

  return (
    <div className="d-flex justify-content-between">
      <input
        type="number"
        value={asset.appliedAmount}
        onChange={handleChangeAmount}
        className="form-control col-6 input-inline"
      />

      <div className="text-right">
        <div className="font-weight-bold">
          R${" "}
          {(parseInt(asset.appliedAmount) * parseFloat(asset.price)).toFixed(2)}
        </div>
        <small className="text-muted">{percent.toFixed()}%</small>
      </div>
    </div>
  );
}
