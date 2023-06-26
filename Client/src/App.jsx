import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/Home'))
const PageLayout = lazy(() => import("./components/global/Layout"))
const SongListingPage = lazy(() => import("./pages/SongListing"))
const SongDetailsPage = lazy(() => import("./pages/SongDetails"))
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense><PageLayout /></Suspense>}>
          <Route path='/' element={<Suspense><HomePage /></Suspense>} />
          <Route path='/song-listing' element={<Suspense><SongListingPage /></Suspense>} />
          <Route path='/song-details' element={<Suspense><SongDetailsPage /></Suspense>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App