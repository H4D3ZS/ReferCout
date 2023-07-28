import Sidebar from "../../components/sidebar/Sidebar";
import Leaderboard from "../../components/Leaderboard/LeadBoard";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Barchart from "../../components/chart/BarChart";
import BarchartRef from "../../components/chart/Barchart2";
const Home = () => {
  return (

    
    <div className="home">
      <Sidebar />

 
      <div className="homeContainer">
        

        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          {/* <Featured /> */}

         <div className="two-chart"> 
         <BarchartRef  />
         <Chart title="Last 6 Months (Revenue)" aspect={2 / 4} />
        
         </div>
          
         
          <Barchart  />
          <BarchartRef />
         
      


        </div>
 
        <div className="listContainer">
        
          <div className="listTitle">Latest Transactions</div>
          <Table />

       
        </div>

          {/* rightbar */}
    

      </div>

      <div className="rightcontainer">
        <div className="sidebar-items">
          <br></br>
        
           <Leaderboard />

        </div>
      </div>

    </div>
  );
};

export default Home;
