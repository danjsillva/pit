import React, { useState } from "react";

export default function AssetLineApplied({ asset, onChangeAsset }) {
  const [amount, setAmount] = useState(asset.amount);

  function handleChangeAmount(event) {
    onChangeAsset({ amount: event.target.value });
  }

  return (
    <div className="d-flex justify-content-between">
      <input
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        onBlur={handleChangeAmount}
        className="form-control col-6 input-inline"
      />

      <div className="text-right">
        <div className="font-weight-bold">R$ {asset.applied}</div>
        <small className="text-muted">{asset.percent}%</small>
      </div>
    </div>
  );
}
