import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <div>
        <Main />
        <Row id='1' title='Up Coming' fetchURL={request.requestUpcoming}/>
        <Row id='2' title='Popular' fetchURL={request.requestPopular}/>
        <Row id='3' title='Trending' fetchURL={request.requestTrending}/>
        <Row id='4' title='Top Rated' fetchURL={request.requestTopRated}/>
        <Row id='5' title='Horror' fetchURL={request.requestHorror}/>
    </div>
  )
}

export default Home