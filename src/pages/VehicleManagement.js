import React from "react";
import VMTable from "../component/VMTable";
import MainHeader from "../component/MainHeader";

const VehicleManagement = (props) => {
  return (
    <div>
      <MainHeader pageTitle={"Vehicle Management"} />
      <VMTable data={props.vehiclesData}/>
    </div>
  );
};

export default VehicleManagement;
