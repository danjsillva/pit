import React, { Fragment } from "react";

import AssetLine from "./AssetLine";

export default function AssetsTable({ assets }) {
  return (
    <Fragment>
      <div className="row">
        <div className="col-2">ATIVO</div>
        <div className="col-1">NOTA</div>
        <div className="col-2">POSIÇÃO ATUAL</div>
        <div className="col-2">POSIÇÃO IDEAL</div>
        <div className="col-2">AÇÃO</div>
      </div>

      {assets &&
        assets.map(asset => (
          <AssetLine key={asset.label} asset={asset} onAssetChange={() => {}} />
        ))}
    </Fragment>
  );
}
