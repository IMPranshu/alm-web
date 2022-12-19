import React, {useState} from "react";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";
import Page from "../components/Page";
import {Export} from "./Export.js"


import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { modifyMeasure, newNegativeAttributeFilter,newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';




import * as Md from "../md/full";
import Button from "../components/controls/Button";
import { NavLink } from "react-router-dom";


const style = { height: 400 };







function Strategy() {

    const [rowData] = useState([
        {Segments: "Option 1 Seg 1", 'SelectSegments?': "Yes", 'GiveOffers?' : "Extension 6M",'LoanCount': 2200},
        {Segments: "Option 1 Seg 2", 'SelectSegments?': "No", 'GiveOffers?' : "No Action",'LoanCount': 40},
        {Segments: "Option 1 Seg 3", 'SelectSegments?': "Yes", 'GiveOffers?' : "Lower Installment",'LoanCount': 110},
        {Segments: "Option 2 Seg 1", 'SelectSegments?': "Yes", 'GiveOffers?' : "Restructuring",'LoanCount': 330},
        {Segments: "Option 2 Seg 2", 'SelectSegments?': "Yes", 'GiveOffers?' : "Extension 6M",'LoanCount': 234},
        {Segments: "Option 2 Seg 3", 'SelectSegments?': "No", 'GiveOffers?' : "No Action",'LoanCount': 556},
        {Segments: "Option 2 Seg 4", 'SelectSegments?': "Yes", 'GiveOffers?' : "Extension 6M",'LoanCount': 441},
        {Segments: "Option 2 Seg 5", 'SelectSegments?': "No", 'GiveOffers?' : "No Action",'LoanCount': 922},
        {Segments: "Option 2 Seg 6", 'SelectSegments?': "Yes", 'GiveOffers?' : "Extension 6M",'LoanCount': 770},

    ]);

    const [columnDefs] = useState([
        { field: 'Segments' },
        { field: 'LoanCount' },
        { field: 'SelectSegments?' },
        { field: 'GiveOffers?' },


    ])

    return (
        <div className="ag-theme-alpine" style={{height: 180, width: 1000}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );
}




const Strategies = () => {

  return (
    <Page>

      <h2>Strategy</h2>

      <Strategy />

      <NavLink to={"/offers"} >
                    <Button><h3>Send Offers</h3></Button>
      </NavLink>

    </Page>
  );
};

export default Strategies;