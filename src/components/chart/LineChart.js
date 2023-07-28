import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


function LineChart() {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
       
        data: [30, 35, 33, 38, 35, 42, 34, 45, 39, 61, 7, 100],
        // borderColor: 'blue',
        // backgroundColor: 'rgba(173,216,230,0.5)',
        tension: 0.5,
        fill:true,

        // backgroundColor: (context) => {
        //   const chartArea = context.chart.chartArea;
        //   const ctx = context.chart.ctx;
        //   const gradient = ctx.createLinearGradient(
        //     chartArea.left,
        //     chartArea.bottom,
        //     chartArea.left,
        //     chartArea.top
        //   );
        //   gradient.addColorStop(0, 'rgba(173,216,230,0.5)');
        //   gradient.addColorStop(1, 'white');
        //   return gradient;
        // },
      
      }
    ]
  }

  const options = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          display: false
        }
        
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        }
      }

    }

  }


  return (
   <div className='App'>
      <h1>Participation rate trend</h1>
      
      
      <Line
        data={data}
        options={options}
      ></Line>
   </div>
  );
}

export default LineChart;
