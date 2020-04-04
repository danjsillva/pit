import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../../App";

export default function AssetLineGoal({ asset }) {
  const { totals } = useContext(AppContext);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(
      (parseFloat(totals.broker) *
        (parseInt(asset.grade) / parseInt(totals.grade))) /
        parseFloat(asset.price)
    );
  }, [asset.grade, asset.price, totals.broker, totals.grade]);

  return (
    <div className="d-flex justify-content-between">
      <div>{parseInt(amount)}</div>

      <div className="text-right">
        <div className="font-weight-bold">
          R$ {(parseInt(amount) * parseFloat(asset.price)).toFixed(2)}
        </div>
        <small className="text-muted">
          {((parseInt(asset.grade) / parseInt(totals.grade)) * 100).toFixed()}%
        </small>
      </div>
    </div>
  );
}
