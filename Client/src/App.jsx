import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/Home'))
const PageLayout = lazy(() => import("./components/global/Layout"))
const SongListingPage = lazy(() => import("./pages/SongListing"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Suspense>
            <PageLayout />
          </Suspense>
        }>
          <Route path='/' element={<Suspense fallback="Loading..."><HomePage /></Suspense>} />
          <Route path='/song-listing' element={<Suspense fallback="Loading..."><SongListingPage /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
