import React from "react";

export default function AssetLineLabel({ asset }) {
  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <div className="font-weight-bold">{asset.label} </div>
        <div className="font-weight-bold">R$ {asset.price.toFixed(2)}</div>
      </div>
      <small className="text-muted">
        {asset.label.includes("3") && "Ação ordinária"}
        {asset.label.includes("4") && "Ação preferencial"}
        {asset.label.includes("11") && "BDRs e Units"}
      </small>
    </div>
  );
}
