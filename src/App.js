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

  return (
    <AppContext.Provider
      value={{
        totals,
        setTotals,
        assets,
        setAssets
      }}
      className="container"
    >
      <div className="container">
        <h1 className="my-5">A planilha de rebalanceamento do Pit Money!</h1>

        <div className="row">
          <div className="col-3">
            <TotalForm />

            <AssetForm />
          </div>
          <div className="col-9">
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
