import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../App";

const Label = ({ label, price }) => (
  <>
    <div className="d-flex justify-content-between">
      <div>{label}</div>
      <div>R$ {price.toFixed(2)}</div>
    </div>
    <small className="text-muted">
      {label.includes("3") && "Ação ordinária"}
      {label.includes("4") && "Ação preferencial"}
      {label.includes("11") && "BDRs e Units"}
    </small>
  </>
);

const Grade = ({ grade, onChangeAsset }) => {
  return (
    <input
      value={grade}
      onChange={e => onChangeAsset({ grade: e.target.value })}
      className="form-control col"
    />
  );
};

const Applied = ({ amount, price, totalApplied, onChangeAsset }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(((amount * price) / totalApplied) * 100);
  }, [amount, price, totalApplied]);

  return (
    <div className="d-flex justify-content-between">
      <input
        value={amount}
        onChange={e => onChangeAsset({ amount: e.target.value })}
        className="form-control col-6"
      />

      <div className="text-right">
        <div>R$ {(amount * price).toFixed(2)}</div>
        <small className="text-muted">{percent.toFixed()}%</small>
      </div>
    </div>
  );
};

const Goal = ({ grade, price, totalBroker, totalGrade }) => {
  const amount = parseInt((totalBroker * (grade / totalGrade)) / price);
  // const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   setAmount((totalBroker * (grade / totalGrade)) / price);
  // }, [grade, price, totalBroker, totalGrade]);

  return (
    <div className="d-flex justify-content-between">
      <div>{amount}</div>

      <div className="text-right">
        <div>R$ {(amount * price).toFixed(2)}</div>
        <small className="text-muted">{((grade / totalGrade) * 100).toFixed()}%</small>
      </div>
    </div>
  );
};

export default function AssetLine({ asset }) {
  const {
    totalApplied,
    totalBroker,
    totalGrade,
    assets,
    setAssets
  } = useContext(AppContext);

  const handleChangeAsset = data => {
    setAssets(
      assets.map(item =>
        item.label === asset.label ? { ...asset, ...data } : item
      )
    );
  };

  return (
    <div className="row">
      <div className="col-2">
        <Label label={asset.label} price={asset.price} />
      </div>
      <div className="col-1">
        <Grade grade={asset.grade} onChangeAsset={handleChangeAsset} />
      </div>
      <div className="col-2">
        <Applied
          amount={asset.amount}
          price={asset.price}
          totalApplied={totalApplied}
          onChangeAsset={handleChangeAsset}
        />
      </div>
      <div className="col-2">
        <Goal
          grade={asset.grade}
          price={asset.price}
          totalBroker={totalBroker}
          totalGrade={totalGrade}
        />
      </div>
      <div className="col-2">COMPRAR</div>
    </div>
  );
}
