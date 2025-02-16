import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewallJobs from './components/ViewallJobs'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewallJobs />
    </>
  )
}

export default App
