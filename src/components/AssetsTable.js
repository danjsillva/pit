import React, { useContext } from "react";

import AssetLine from "./AssetLine";

import { AppContext } from "../App";

export default function AssetsTable() {
  const { assets } = useContext(AppContext);

  return (
    <div>
      <div className="row">
        <div className="col-3 p-2">ATIVO</div>
        <div className="col-1 p-2">NOTA</div>
        <div className="col-3 p-2">POSIÇÃO ATUAL</div>
        <div className="col-3 p-2">POSIÇÃO IDEAL</div>
        <div className="col-2 p-2">AÇÃO</div>
      </div>

      {assets &&
        assets.map(asset => (
          <AssetLine key={asset.label} asset={asset} onAssetChange={() => {}} />
        ))}
    </div>
  );
}
