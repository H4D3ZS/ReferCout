
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'; 

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);


function DoughnutChart() {
    const data = {
      labels: ['', '', ''],
      datasets: [
        {
          data: [40,30,30],
          backgroundColor: ['blue', 'aqua', 'green'],
        }
      ]

    }
    const options = {

    }

    const textCenter = {
      id: 'textCenter',
      beforeDatasetsDraw(chart, args, pluginOptions){
        const {ctx, } = chart;

        ctx.save();
        ctx.font = 'bolder 30px sans-serif';
        ctx.fillStyle = 'black';
        ctx.fillText('Total 125', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].x);

      }

    }



  return (
   <div className='App'>
      <h1>Referral Sources:</h1>
   <div style={
        {
          padding: '20px',
          width: 1500,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          height: '90vh',
        }
      }>
        <Doughnut
          data={data}
          options={options}
          plugins={[textCenter]}
        ></Doughnut>

      </div>
      </div>
  );
}

export default DoughnutChart;
