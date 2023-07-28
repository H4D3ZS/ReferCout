
import "./chart.scss";
import{
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';


import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function BarChart() {
  const data = {
    labels: ['500', '450', '360', '288', '202'],
    datasets: [
      {
        data: [500, 500, 500, 500, 500],
        backgroundColor: ['blue', '#41C9EB', '#FEC20C', '#9866C7', 'green'],

        borderWidth: {
          top: [0, 100, 210, 300, 500,]
        },

        borderHeight: 1500,


        

      },
    ]

  }
  const options = {

  }




  return (
    <div className="chart">

     <div
     style={
      {
        padding: '20px',
        width: '90%',
      
        
      }
    }
     >
        <Bar
          data={data}
          options={options}
        ></Bar>
     </div>

    </div>
  )
}

export default BarChart;
