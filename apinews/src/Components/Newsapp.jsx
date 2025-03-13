import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("pakistan")
    const [newsData, setNewData] = useState(null)
    const API_KEY = "1a0c3c4406e148ed89ad33144448505b";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const jsonData = await response.json();
        // console.log(jsonData.articles)
        setNewData(jsonData.articles)
    }
useEffect(()=>{
    getData()
},[])
    const handle = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value)

    }
    const inputSearch =(e)=>{
        setSearch(e.target.value)
        getData()
    }
    return (
        <div>
            <nav>
                <div className='d-flex align-items-center justify-content-between p-2 bg-secondary mb-4'>
                    <div>
                        <h2 className='text-white fs-sm-5 '>Daily News</h2>
                    </div>
                    <div className='d-flex d-none d-md-block'>
                        <ul className='d-flex gap-4 list-unstyled mb-0'>
                            <li><a href="" className="text-decoration-none text-white fs-5 fw-bolder">All News</a></li>
                            <li><a href="" className="text-decoration-none text-white fs-5 fw-bolder">Trending</a></li>
                        </ul>
                    </div>

                    <div className='d-flex gap-2'>
                        <input type="text"className="rounded border-1 w-100 w-md-75 w-lg-50" value={search} placeholder='Search News' onChange={handle} />
                        <button onClick={getData} className='rounded border-0 btn-sports'>Search</button>
                    </div>
                </div>


            </nav>
            <div className="marquee-container">
      <p className="marquee-text">Stay Updated with TrendyNews</p>
    </div>            <div className='d-flex justify-content-center gap-4 flex-wrap'>
                <button className='rounded px-4 btn-sports' onClick={inputSearch} value="sport" >Sports</button>
                <button className='rounded px-4 btn-sports' onClick={inputSearch}  value="politics">Politics</button>
                <button className='rounded px-4 btn-sports' onClick={inputSearch} value="entertainment">Entertainment</button>
                <button className='rounded px-4 btn-sports' onClick={inputSearch} value="health">Health</button>
                <button className='rounded px-4 btn-sports' onClick={inputSearch} value="fitness">Fitness</button>
                <button className='rounded px-4 btn-sports' onClick={inputSearch} value="ramadan">Ramadan</button>

            </div>

            <div>
                {
                   newsData ?   <Card  data={newsData}/> : null
                }
              
            </div>
        </div>
    )
}

export default Newsapp