import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API

const [progress,setProgress]=useState(0)

    return (
     
      <div>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(100)}
        />
        <News setProgress ={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country = "in" category = "general"/>
         <News setProgress ={setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country = "in" category = "business"/>
          <News setProgress ={setProgress} apiKey={apiKey}  key="entertainment"  pageSize={pageSize} country = "in" category = "entertainment"/>
         <News setProgress ={setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country = "in" category = "general"/>
       <News setProgress ={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country = "in" category = "health"/>
          <News setProgress ={setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country = "in" category = "science"/>
        <News setProgress ={setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} country = "in" category = "sports"/>
         <News setProgress ={setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country = "in" category = "technology"/>
      </div>
    )
}

export default App;
