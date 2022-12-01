import React, { useState } from "react";

import Page from "../components/Page";
import { InsightView } from "@gooddata/sdk-ui-ext";

import * as Md from "../md/full";

import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { modifyMeasure, newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { AttributeFilter } from "@gooddata/sdk-ui-filters";

const segmentFilter = newPositiveAttributeFilter(Md.PaymentPropensity, ["S1"]);

function LoansBySegment(filter) {
  return (
    <div style={{ height: 400 }}>
      <InsightView
        insight={Md.Insights.LoansBySegment}
        showTitle={"Loans by segment"}
        filters={[filter]}
      />
    </div>
  );
}

function SegmentVariables(filter) {
  return (
    <div style={{ height: 400 }}>
      <InsightView
        insight={Md.Insights.SegmentVariables}
        showTitle={"Segment Variables"}
        filters={[filter]}
      />
    </div>
  );
}

function CustomChart(filter) {
  const deliquencies = modifyMeasure(Md.TotalDelqLast6m.Avg, (m) =>
    m.title("Average Deliquencies")
  );

  return (
    <div style={{ height: 300 }}>
      <ColumnChart
        measures={[deliquencies]}
        viewBy={Md.PaymentPropensity}
        filters={[filter]}
      />
    </div>
  );
}

const Home = () => {
  const [filter, setFilter] = useState(segmentFilter);

  return (
    <Page>
      <AttributeFilter
        filter={filter}
        onApply={(updatedFilter) => {
          console.log("Applying updated filter:", updatedFilter);
          setFilter(updatedFilter);
        }}
      />
      <LoansBySegment filter={filter} />
      <SegmentVariables filter={filter} />
      <CustomChart filter={filter} />
    </Page>
  );
};

export default Home;
