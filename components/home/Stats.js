import { useState,useEffect } from "react";
import useSWR from "swr";
import CarbonRemoved_icon from "./icon/HomeCo2_Icon";
import GreenTransaction_icon from "./icon/HomeGreenTransaction_Icon";
import TradingVolume_icon from "./icon/HomeTradingVolume_Icon";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Stats = () => {
  const [carbonRemoved, setCarbonRemoved]=useState(90000)
  const [greenTransactions, setGreenTransactions]=useState(10000)
  const [tradingVolume, setTradingVolume]=useState(900000)

  const { data, error, isLoading } = useSWR("api/stats/",fetcher);
  console.log(data)

  

    return ( 
      
      <section className="flex flex-col items-center justify-center">
        <h2 className="title sm:text-4xl md:text-5xl w-[80%]">Sustainable practices, high impact stats</h2>
        <p className="mx-auto mb-8 intro sm:max-w-xl w-[70%]">Our Platform Leads the Way in Green Practices and CO2 Reduction
        </p>
        
        <ul className="stats-container">
          <li className="stats-item ">
            <span className="stats-icon"><CarbonRemoved_icon /></span>
            <h3 className="stats-count">{data?.carbon_removed_ || '--'}</h3>
            <p className="stats-label">Tons of CO2 Avoidance</p>
          </li>

          <li className="stats-item">
            <span className="stats-icon"><GreenTransaction_icon /></span>
            <h3 className="stats-count">{data?.transactions_ || '--'}</h3>
            <p className="stats-label ">Green Transactions</p>
          </li>

          <li className="stats-item">
            <span className="stats-icon"><TradingVolume_icon /></span>
            <h3 className="stats-count">{data?.green_product_purchased_ || '--'}</h3>
            <p className="stats-label ">Green Product Purchased</p>
          </li>
        </ul>
      </section>
      
     );
}
 
export default Stats;