import React, { useContext } from "react";

import AssetLine from "./AssetLine";

import { AppContext } from "../../App";

export default function AssetsTable() {
  const { assets, setAssets, getAsset } = useContext(AppContext);

  function sortAssets(field) {
    setAssets(assets.sort((a, b) => (a[field] >= b[field] ? 1 : -1)));
  }

  return (
    <div>
      <div className="row">
        <div className="col-3">ORDENAR A PLANILHA</div>
        <div className="col-3">VER GRÁFICOS</div>
        <div className="col-3">UPLOAD/DOWNLOAD CSV</div>
      </div>

      <div className="row">
        <div className="col-3 pointer" onClick={e => sortAssets("label")}>
          ATIVO
        </div>
        <div className="col-1 pointer" onClick={e => sortAssets("grade")}>
          NOTA
        </div>
        <div className="col-3 pointer" onClick={e => sortAssets("amount")}>
          POSIÇÃO ATUAL
        </div>
        <div className="col-3 pointer" onClick={e => sortAssets("amountGoal")}>
          POSIÇÃO IDEAL
        </div>
        <div className="col-2 pointer" onClick={e => sortAssets("status")}>
          AÇÃO
        </div>
      </div>

      {assets &&
        assets.map(asset => (
          <AssetLine key={asset.label} asset={getAsset(asset)} />
        ))}
    </div>
  );
}
