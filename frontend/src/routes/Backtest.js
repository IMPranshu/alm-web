import React, {useState} from "react";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";
import Page from "../components/Page";
import {Export} from "./Export.js"

import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { modifyMeasure, newNegativeAttributeFilter,newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";
import {pivotData} from './data';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


import * as Md from "../md/full";
import Button from "../components/controls/Button";
import { NavLink } from "react-router-dom";
import { InsightView } from "@gooddata/sdk-ui-ext";


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
            Md.LoanStartMonthYear
        ]}
        onDrill={onDrillHandler}
        filters={scoreFilter ? [scoreFilter,typeFilter,loantermFilter] : []}
    />
</div>
</div>

  );
}

function BacktestInsightView() {

  return (


    <div style={style}>
    <InsightView
        insight={Md.Insights.Backtest}

    />
</div>


  );
}



function OptionsView() {

    const [rowData] = useState([
        {Segments: "Opt1/Seg1", RiskAssociated: "High", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $500",LoanCount: 2200},
        {Segments: "Opt1/Seg2", RiskAssociated: "Low", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $500",LoanCount: 40},
        {Segments: "Opt1/Seg3", RiskAssociated: "Medium", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $1000",LoanCount: 110},
        {Segments: "Opt2/Seg1", RiskAssociated: "High", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $1000",LoanCount: 330},
        {Segments: "Opt2/Seg2", RiskAssociated: "Medium", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $700",LoanCount: 234},
        {Segments: "Opt2/Seg3", RiskAssociated: "Low", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $500",LoanCount: 556},
        {Segments: "Opt2/Seg4", RiskAssociated: "Medium", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $600",LoanCount: 441},
        {Segments: "Opt2/Seg5", RiskAssociated: "No", PropensityBins : "S4&S5",InstallmentAmount:"Inst. < $200",LoanCount: 922},
        {Segments: "Opt2/Seg6", RiskAssociated: "High", PropensityBins : "S1,S2&S3",InstallmentAmount:"Inst. > $1000",LoanCount: 770},

    ]);

    const [columnDefs] = useState([
        { field: 'Segments' },
        { field: 'RiskAssociated' },
        { field: 'PropensityBins' },
        { field: 'InstallmentAmount' },
        { field: 'LoanCount' },
    ])

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 1000}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );




  }

  function ThreeMonthsBacktestView() {

    const [rowData] = useState([
        {Segments: "Opt1/Seg1", 'No of Default Acc': "1100",'% Loss':"50"},
        {Segments: "Opt1/Seg2", 'No of Default Acc': "5",'% Loss':"12.5"},

        {Segments: "Opt1/Seg3", 'No of Default Acc': "35",'% Loss':"30"},

        {Segments: "Opt2/Seg1", 'No of Default Acc': "33",'% Loss':"10"},

        {Segments: "Opt2/Seg2", 'No of Default Acc': "50",'% Loss':"22"},

        {Segments: "Opt2/Seg3", 'No of Default Acc': "75",'% Loss':"14"},
        {Segments: "Opt2/Seg4", 'No of Default Acc': "44",'% Loss':"10"},
        {Segments: "Opt2/Seg5", 'No of Default Acc': "9",'% Loss':"1"},
        {Segments: "Opt2/Seg6", 'No of Default Acc': "350",'% Loss':"45"},


    ]);

    const [columnDefs] = useState([
        { field: 'Segments' },
        { field: 'No of Default Acc' },
        { field: '% Loss' },

    ])

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 500}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );




  }

  function SixMonthsBacktestView() {

    const [rowData] = useState([
        {Segments: "Opt1/Seg1", 'No of Default Acc': "1000",'% Loss':"40"},
        {Segments: "Opt1/Seg2", 'No of Default Acc': "10",'% Loss':"25"},

        {Segments: "Opt1/Seg3", 'No of Default Acc': "45",'% Loss':"40"},

        {Segments: "Opt2/Seg1", 'No of Default Acc': "34",'% Loss':"11"},

        {Segments: "Opt2/Seg2", 'No of Default Acc': "60",'% Loss':"27"},

        {Segments: "Opt2/Seg3", 'No of Default Acc': "75",'% Loss':"14"},
        {Segments: "Opt2/Seg4", 'No of Default Acc': "64",'% Loss':"19"},
        {Segments: "Opt2/Seg5", 'No of Default Acc': "90",'% Loss':"10"},
        {Segments: "Opt2/Seg6", 'No of Default Acc': "250",'% Loss':"35"},


    ]);

    const [columnDefs] = useState([
        { field: 'Segments' },
        { field: 'No of Default Acc' },
        { field: '% Loss' },

    ])

    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 500}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    );




  }



const Backtest = () => {

  return (
    <Page>

      <h3>Current Analysis</h3>
      <OptionsView/>
      <h3>After 3 months</h3>
      <ThreeMonthsBacktestView />

      <NavLink to={"/strategies"} >
                    <Button><h3>Send for Review</h3></Button>
      </NavLink>

      <h3>After 6 months</h3>
      <SixMonthsBacktestView />

      <NavLink to={"/strategies"} >
                    <Button><h3>Send for Review</h3></Button>
      </NavLink>

    </Page>
  );
};

export default Backtest;