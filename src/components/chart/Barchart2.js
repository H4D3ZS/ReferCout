import "./chart.scss";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function BarChart2() {
  const data = {
    labels: ['Job Title', 'Job Title', 'Job Title', 'Job Title', 'Job Title', 'Job Title'],
    datasets: [
      {
        label: 'referral',
        data: [45, 40, 37, 40, 21, 45],
        backgroundColor:'#0437f2', 
      },
      {
        label: 'Hires',
        data: [63, 78, 31, 60, 43, 41],
        backgroundColor: '#00CCFF',
      }
    ]
  };

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
  };

  return (
    <div className="chart">
      <h1>Referrals vs Hires trend</h1>

      <div style={{ padding: '20px', width: '100%', maxWidth: '1500px', margin: '0 auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarChart2;