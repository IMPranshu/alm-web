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


function SegmentfirstView() {
    const [scoreFilter, setScoreFilter] = useState(newPositiveAttributeFilter(Md.InternalscoreBins, { uris: ["801-900", "701-800"] }));
    const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.Loanstartyear, { uris: ["2019"] }));
    const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} />

    <div style={style}>
    <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    />
</div>
</div>

  );
}

function SegmentsecondView() {
    const [scoreFilter, setScoreFilter] = useState(newPositiveAttributeFilter(Md.InternalscoreBins, { uris: ["601-700"] }));
    const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.Loanstartyear, { uris: ["2019"] }));
    const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} />

    <div style={style}>
    <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear,

        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    />
</div>
</div>

  );
}

function SegmentthirdView() {
    const [scoreFilter, setScoreFilter] = useState(newNegativeAttributeFilter(Md.MaxDpdLast6mBins, { uris: [] }));
    const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.LoanStartMonthYear, { uris: ["April-2022"] }));
    const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));

    // currentbalance, installment amount, loanterm, numberofaccounts, max dayspastdur6m,

    function onDrillHandler(event) {
        // handle drill
    }


  return (
    <div className="s-attribute-filter">
            <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} />

    <div style={style}>
    <PivotTable
        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    />
</div>
</div>

  );
}

function FirstOptionsView() {

    const [rowData] = useState([
        {Segments: "Seg1", RiskAssociated: "High", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $500",'LoanCount': 2200},
        {Segments: "Seg2", RiskAssociated: "Low", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $500",'LoanCount': 40},
        {Segments: "Seg3", RiskAssociated: "Medium", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $1000",'LoanCount': 110},

    ]);

    const [columnDefs] = useState([
        { field: 'Segments' },
        { field: 'RiskAssociated' },
        { field: 'PropensityBins' },
        { field: 'InstallmentAmount' },
        { field: 'LoanCount' },
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

    function SecondOptionsView() {

        const [rowData] = useState([

            {Segments: "Seg1", RiskAssociated: "High", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $1000",'LoanCount': 330},
            {Segments: "Seg2", RiskAssociated: "Medium", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $700",'LoanCount': 234},
            {Segments: "Seg3", RiskAssociated: "Low", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $500",'LoanCount': 556},
            {Segments: "Seg4", RiskAssociated: "Medium", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $600",'LoanCount': 441},
            {Segments: "Seg5", RiskAssociated: "No", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $200",'LoanCount': 922},
            {Segments: "Seg6", RiskAssociated: "High", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $1000",'LoanCount': 770},

        ]);

        const [columnDefs] = useState([
            { field: 'Segments' },
            { field: 'RiskAssociated' },
            { field: 'PropensityBins' },
            { field: 'InstallmentAmount' },
            { field: 'LoanCount' },
        ])
    
        return (
            <div className="ag-theme-alpine" style={{height: 300, width: 1000}}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}>
                </AgGridReact>
            </div>
        );
    
    
    
    
      }





const Options = () => {

  return (
    <Page>

      <h2>Option 1</h2>
      <FirstOptionsView />

      <h2>Option 2</h2>
      <SecondOptionsView />

      <NavLink to={"/backtest"} >
                    <Button><h3>Backtest</h3></Button>
      </NavLink>

    </Page>
  );
};

export default Options;