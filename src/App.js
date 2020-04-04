import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TotalForm from "./components/TotalForm";
import AssetForm from "./components/AssetForm";
import AssetsTable from "./components/AssetsTable";
import "./App.scss";

export const AppContext = React.createContext({});

export default function App() {
  const [totalBroker, setTotalBroker] = useState(200);
  const [totalApplied, setTotalApplied] = useState(0);
  const [totalGrade, setTotalGrade] = useState(0);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    setTotalApplied(
      assets.reduce((total, item) => total + item.amount * item.price, 0)
    );
    setTotalGrade(assets.reduce((total, item) => total + item.grade, 0));
  }, [assets]);

  return (
    <AppContext.Provider
      value={{
        totalBroker,
        setTotalBroker,
        totalApplied,
        setTotalApplied,
        totalGrade,
        setTotalGrade,
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
