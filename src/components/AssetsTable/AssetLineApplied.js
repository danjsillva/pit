import React, { useContext, useState } from "react";

import { AppContext } from "../../App";

export default function AssetLineApplied({ asset, onChangeAsset }) {
  const { totals } = useContext(AppContext);
  const [amount, setAmount] = useState(asset.amount);
  const [percent, setPercent] = useState(0);

  function handleChangeAmount(event) {
    onChangeAsset({ amount: event.target.value });

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
        value={amount}
        onChange={e => setAmount(e.target.value)}
        onBlur={handleChangeAmount}
        className="form-control col-6 input-inline"
      />

      <div className="text-right">
        <div className="font-weight-bold">
          R$ {(parseInt(asset.amount) * parseFloat(asset.price)).toFixed(2)}
        </div>
        <small className="text-muted">{percent.toFixed()}%</small>
      </div>
    </div>
  );
}
