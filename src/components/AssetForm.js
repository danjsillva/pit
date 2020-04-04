import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { AppContext } from "../App";

export default function() {
  const { assets, setAssets } = useContext(AppContext);
  const [asset, setAsset] = useState({
    label: "PETR4",
    price: 10,
    grade: 10,
    amount: 10
  });

  function handleSubmitAsset(event) {
    event.preventDefault();

    if (assets.some(item => item.label === asset.label))
      return toast.error("Esse ativo já está na planilha");

    setAssets([...assets, asset]);
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
          value={asset.amount}
          onChange={e => setAsset({ ...asset, amount: e.target.value })}
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
