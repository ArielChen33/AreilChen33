// import logo from './logo.svg';
import axios from "axios";
import React from 'react';
import './App.css';
import {heading} from './components/heading';
import { introduction } from './components/introduction';
import education from './components/education';
import skill from './components/skill';
import projects from './components/projects';
import Navbar from './components/Navbar';
import sociallinks from './components/sociallinks';
import footer from './components/footer';
// import infintescroll from './components/infinitescroll';
// import cryptolist from './components/cryptolist';
// import loader from './components/loader';

const PAGE_NUMBER = 1; 

function App() {

  // const [coinsData, setCoinsData] = useState([]);
  // const [page, setPage] = useState(PAGE_NUMBER);
  // const [loading, setLoading] = useState(false);
  
  // useEffect(() => {
  //   setTimeout(async () => {
  //       const response = await axios.get(
  //           `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false`
  //       );

  //       setCoinsData((prev) => {
  //           return [...prev, ...response.data];
  //       });
  //       setLoading(false);
  //   }, 1500);
  // }, [page]);

  // useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = async () => {
  //     if (
  //         window.innerHeight + document.documentElement.scrollTop + 1 >=
  //         document.documentElement.scrollHeight
  //     ) {
  //         setLoading(true);
  //         setPage((prev) => prev + 1);
  //     }
  // };

  return (    
    <>
    {Navbar()}
    <div class='container'>
      
      {heading()}
      <div id='introduction'>{introduction()}</div>
      <div id="sociallinks">{sociallinks()}</div>
      <div id='education'>{education()}</div>
      <div id="skill">{skill()}</div>
      <div id="projects">{projects()}</div>
      {/* <div id="infinitescroll">{infintescroll()}</div> */}
      <div id="footer">{footer()}</div>

    </div>

    {/* <div className='app'>
            <h1>Crypto Gallery</h1>
            <CryptoList coinsData={coinsData} />
            {loading && <Loader />}
    </div> */}
    </>


    
    
  );
}

export default App;

