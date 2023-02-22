
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import routes from '~react-pages'

export default function App() {
  return (
    <main className="font-sans flex flex-col min-h-screen text-center text-gray-700 dark:text-gray-200">
      <div className="flex-1 container pt-20 m-auto">
        <Router basename="/use-or-not-use-effect/">
          <Routes />
        </Router>
      </div>
      <Footer />
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
