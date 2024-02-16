
import { portfolioData } from "./potfolioData";
import { useState } from 'react';
import PortfolioItem from './portfolioItem';
function PortfolioList() {
  const [portfolios,setPortfolios]=useState(portfolioData)
  return (
    <>
    {
      portfolios.map( (portfolio)=>{
        return(
          <PortfolioItem data={portfolio} key={portfolio.id}/>
        )
        
      }  )
    }
    </>
   
  )
}

export default PortfolioList
