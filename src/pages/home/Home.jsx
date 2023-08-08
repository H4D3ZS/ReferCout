import React from "react";
// import "../home/new.css"; // Make sure to import your CSS file
import Sidebar from "../../components/sidebar/Sidebar";
import Leaderboard from "../../components/Leaderboard/LeadBoard";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import LineWaveChart from "../../components/chart/LineChart";
import Table from "../../components/table/Table";
import Barchart from "../../components/chart/BarChart";
import BarchartRef from "../../components/chart/Barchart2";

import SemiCircularProgress from "../../components/chart/CircularProgressBar";
import { LineChart } from "recharts";
const Home = () => {
  return (
    <div class="dashboard">
      <div class="sidebar">
        <Sidebar />
      </div>

      <div class="main">
        <div class="top-cards">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div class="content">
          <div class="container">
            <BarchartRef />
          </div>

          <div class="container">
            <BarchartRef />
          </div>
        </div>
      </div>

      <div class="right-sidebar">
        <Leaderboard />
      </div>
    </div>

    // <div className="dashboard">
    //   <div className="sidebar">
    //     <Sidebar />
    //   </div>

    //   <div className="main">
    //     <div className="top-cards">
    //       {/* Top cards content goes here */}
    //       <Widget type="user" />
    //       <Widget type="order" />
    //       <Widget type="earning" />
    //       <Widget type="balance" />
    //     </div>
    //     <div className="big-container">
    //       {/* Big container content goes here */}

    //       <BarchartRef />
    //     </div>

    //       <div className="bottom-containers">
    //         <div className="left-container">
    //           {/* Left container content goes here */}
    //           <SemiCircularProgress
    //             title="Referrals"
    //             percentage={66.7}
    //             totalEmployee={100}
    //           />
    //         </div>
    //         <div className="right-container">
    //           {/* Right container content goes here */}
    //           <BarchartRef />
    //         </div>
    //       </div>
    //       <div className="bottom-containers">
    //         <div className="left-container">
    //           {/* Left container content goes here */}
    //           <SemiCircularProgress
    //             title="Referrals"
    //             percentage={66.7}
    //             totalEmployee={100}
    //           />
    //         </div>
    //         <div className="right-container">
    //           {/* Right container content goes here */}
    //           <BarchartRef />
    //         </div>
    //       </div>
    //   </div>

    //   <div className="right-sidebar">
    //     {/* Right sidebar content goes here */}
    //     <Leaderboard />
    //   </div>
    // </div>
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // <div className="home">
    //   <Sidebar />

    //   <div className="homeContainer">
    //     <Navbar />
    //     <div className="widgets">
    //       <Widget type="user" />
    //       <Widget type="order" />
    //       <Widget type="earning" />
    //       <Widget type="balance" />
    //     </div>
    //     <div className="charts-card">
    //       {/* <Featured /> */}

    //       <div className="two-chart chart1">
    //         <div className="chart-container">
    //           <BarchartRef />
    //         </div>
    //       </div>
    //       <div className="two-chart">
    //         <div className="chart-container">
    //           <div className="container">
    //             <div className="card">
    //               <SemiCircularProgress
    //                 title="Referrals"
    //                 percentage={66.7}
    //                 totalEmployee={100}
    //               />
    //             </div>

    //             <div className="card">
    //               <BarchartRef />
    //             </div>
    //           </div>

    //           <div className="barchart-container">
    //             <div className="card">
    //               <SemiCircularProgress
    //                 title="Referrals"
    //                 percentage={66.7}
    //                 totalEmployee={100}
    //               />
    //             </div>

    //             <div className="card">
    //               <LineWaveChart />
    //             </div>
    //           </div>
    //         </div>

    //         {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 4} /> */}
    //       </div>

    //       {/* <Barchart  />
    //       <BarchartRef /> */}
    //     </div>

    //     <div className="listContainer">
    //       <div className="listTitle">Latest Transactions</div>
    //       <Table />
    //     </div>

    //     {/* rightbar */}
    //   </div>

    //   <div className="rightcontainer">
    //     <div className="sidebar-items">
    //       <br></br>

    //       <Leaderboard />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
