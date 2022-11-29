import React from 'react';

import {
  Chart, Series, Legend, ValueAxis,
} from 'devextreme-react/chart';
import { Button } from 'devextreme-react/button';
import service from '../../utils/data.js';

const colors = ['#c7d2fd', '#6366ff'];

class DashboardCard06 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstLevel: true,
      data: service.filterData(''),
    };

    this.customizePoint = this.customizePoint.bind(this);
    this.onPointClick = this.onPointClick.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    return (
      <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
        <Chart
          id="chart"
          title="User Risk Profiles percentage"
          customizePoint={this.customizePoint}
          onPointClick={this.onPointClick}
          className={this.state.isFirstLevel ? 'pointer-on-bars' : ''}
          dataSource={this.state.data}
        >
          <Series type="bar" />
          <ValueAxis showZero={true} />
          <Legend visible={false} />
        </Chart>
        <Button className="font-medium text-indigo-500 hover:text-indigo-600"
          visible={!this.state.isFirstLevel}
          onClick={this.onButtonClick}
        ><span className="hidden sm:inline"> -&gt;</span>Back
          </Button>
      </div>
    );
  }

  customizePoint() {
    return {
      color: colors[Number(this.state.isFirstLevel)],
      hoverStyle: !this.state.isFirstLevel ? {
        hatching: 'none',
      } : {},
    };
  }

  onPointClick(e) {
    if (this.state.isFirstLevel) {
      this.setState({
        isFirstLevel: false,
        data: service.filterData(e.target.originalArgument),
      });
    }
  }

  onButtonClick() {
    if (!this.state.isFirstLevel) {
      this.setState({
        isFirstLevel: true,
        data: service.filterData(''),
      });
    }
  }
}

export default DashboardCard06;
