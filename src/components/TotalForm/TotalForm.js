import React, { useContext, useState } from "react";

import { AppContext } from "../../App";

export default function() {
  const { totals, setTotals } = useContext(AppContext);
  const [broker, setBroker] = useState(totals.broker);

  function handleChangeBroker(event) {
    setTotals({ ...totals, broker: event.target.value });
  }

  return (
    <div className="row">
      <div className="col-12 col-lg-6 form-group">
        <input
          type="text"
          value={broker}
          onChange={e => setBroker(e.target.value)}
          onBlur={handleChangeBroker}
          className="form-control"
        />
      </div>

      <div className="col-12 col-lg-6 form-group">
        <input
          type="number"
          value={totals.applied}
          readOnly
          className="form-control"
        />
      </div>
    </div>
  );
}
