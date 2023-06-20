import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'

const HomePage = lazy(() => import('./pages/Home'))
const PageLayout = lazy(() => import("./components/global/Layout"))
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
        </Route>
      </Routes>
    </Router>
  )
}

export default App
