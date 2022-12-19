import React, {useState} from "react";
import "@gooddata/sdk-ui-dashboard/styles/css/main.css";
import Page from "../components/Page";
import {Export} from "./Export.js"

import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newNegativeAttributeFilter,newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilterButton } from "@gooddata/sdk-ui-filters";




import * as Md from "../md/full";


const style = { height: 400 };

function PivotView() {
    const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.LoanStartMonthYear, { uris: ["April-2022"] }));
    // const [scoreFilter, setScoreFilter] = useState(newNegativeAttributeFilter(Md.InternalscoreBins, { uris: [] }));
    // const [delqFilter, setDelqFilter] = useState(newNegativeAttributeFilter(Md.TotalDelqLast6m, { uris: [] }));
    // const [maxdpdFilter, setMaxdpdFilter] = useState(newNegativeAttributeFilter(Md.MaxDpdLast6mBins, { uris: [] }));
    // const [balFilter, setBalFilter] = useState(newNegativeAttributeFilter(Md.CurrentbalanceBins, { uris: [] }));
    // const [instamtFilter, setInstamtFilter] = useState(newNegativeAttributeFilter(Md.InstallmentamountBins, { uris: [] }));
    const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));
    // const [numofaccFilter, setNumofaccFilter] = useState(newNegativeAttributeFilter(Md.NumberofaccountsBins, { uris: [] }));



  return (


    <div className="s-attribute-filter">
            <AttributeFilterButton filter={typeFilter} onApply={setTypeFilter} />
            {/* <AttributeFilterButton filter={scoreFilter} onApply={setScoreFilter} />
            <AttributeFilterButton filter={delqFilter} onApply={setDelqFilter} />
            <AttributeFilterButton filter={maxdpdFilter} onApply={setMaxdpdFilter} />
            <AttributeFilterButton filter={balFilter} onApply={setBalFilter} />
            <AttributeFilterButton filter={instamtFilter} onApply={setInstamtFilter} />

            <AttributeFilterButton filter={numofaccFilter} onApply={setNumofaccFilter} /> */}

            <AttributeFilterButton filter={loantermFilter} onApply={setLoantermFilter} />


            <Export filters={typeFilter ? [typeFilter,loantermFilter] : []}>
            {(onExportReady) => (
    <div style={style}>
    <PivotTable

        rows={[Md.Loannum_1,
            Md.Custinternalunderwritingscore_1,
            Md.Loanterm,
            Md.MaxDpdLast6m,
            Md.TotalDelqLast6m,
            Md.LoanStartMonthYear
        ]}

        filters={typeFilter ? [typeFilter,loantermFilter] : []}
          // scoreFilter,delqFilter,maxdpdFilter,balFilter,instamtFilter,loantermFilter,numofaccFilter] : []}
        onExportReady={onExportReady}

    />
</div>
    )}
  </Export>
</div>

  );
}




const Home = () => {

  return (
    <Page>
        <h1>Total Population</h1>
      <PivotView />



    </Page>
  );
};

export default Home;