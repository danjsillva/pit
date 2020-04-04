import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { AppContext } from "../../App";

export default function() {
  const { totals, setTotals, assets, setAssets } = useContext(AppContext);
  const [asset, setAsset] = useState({
    label: "PETR4",
    price: 10,
    grade: 10,
    appliedAmount: 10,
    goalAmount: 0
  });

  function handleSubmitAsset(event) {
    event.preventDefault();

    if (assets.some(item => item.label === asset.label))
      return toast.error("Esse ativo já está na planilha");

    setAssets([...assets, asset]);
    setTotals({
      ...totals,
      applied: [...assets, asset].reduce(
        (total, item) =>
          parseInt(total) +
          parseInt(item.appliedAmount) * parseFloat(item.price),
        0
      ),
      grade: [...assets, asset].reduce(
        (total, item) => parseInt(total) + parseInt(item.grade),
        0
      )
    });
  }

  return (
    <form onSubmit={handleSubmitAsset} className="mt-5">
      <div className="form-group">
        <label>Adicionar ativo</label>
        <input
          type="text"
          value={asset.label}
          onChange={e => setAsset({ ...asset, label: e.target.value })}
          className="form-control"
          autoFocus
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          value={asset.grade}
          onChange={e => setAsset({ ...asset, grade: e.target.value })}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          value={asset.appliedAmount}
          onChange={e => setAsset({ ...asset, appliedAmount: e.target.value })}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Adicionar ativo
        </button>
      </div>
    </form>
  );
}
