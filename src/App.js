import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TotalForm from "./components/TotalForm/TotalForm";
import AssetForm from "./components/AssetForm/AssetForm";
import AssetsTable from "./components/AssetsTable/AssetsTable";
import "./App.scss";

export const AppContext = React.createContext({});

export default function App() {
  const [totals, setTotals] = useState({
    broker: 200,
    applied: 0,
    grade: 0
  });
  const [assets, setAssets] = useState([]);

  const getAsset = data => {
    const asset = { ...data };

    asset.amount = parseInt(asset.amount);
    asset.applied = (parseInt(asset.amount) * parseFloat(asset.price)).toFixed(
      2
    );
    asset.percent = (
      ((parseInt(asset.amount) * parseFloat(asset.price)) /
        parseFloat(totals.applied)) *
      100
    ).toFixed();

    asset.percentGoal = (
      (parseInt(asset.grade) / parseInt(totals.grade)) *
      100
    ).toFixed();
    asset.appliedGoal = parseInt(
      (parseFloat(totals.broker) * parseFloat(asset.percentGoal)) / 100
    ).toFixed(2);
    asset.amountGoal = parseInt(
      parseFloat(asset.appliedGoal) / parseFloat(asset.price)
    );

    asset.status = asset.amountGoal > asset.amount ? "COMPRAR" : "AGUARDAR";

    return asset;
  };

  return (
    <AppContext.Provider
      value={{
        totals,
        setTotals,
        assets,
        setAssets,
        getAsset
      }}
      className="container"
    >
      <div className="container">
        <h1 className="my-5">A planilha de rebalanceamento do Pit Money!</h1>

        <div className="row">
          <div className="col-12 col-lg-3">
            <TotalForm />

            <AssetForm />
          </div>
          <div className="col-12 col-lg-9">
            <AssetsTable />
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-left"
        closeButton={false}
        hideProgressBar={true}
        toastClassName="toast-container"
      />
    </AppContext.Provider>
  );
}
