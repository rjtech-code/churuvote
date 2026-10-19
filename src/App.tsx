import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { SiteShell } from './components/SiteShell'
import { ThemeProvider } from './context/ThemeProvider'
import { LanguageProvider } from './i18n/LanguageProvider'
import { Home } from './pages/Home'
import { SarpanchPage, ZpPsPage } from './pages/ElectionPages'
import { NotFound } from './pages/NotFound'

// The guide carries the full Hindi + English legal text; load it only when visited.
const RoGuide = lazy(() => import('./pages/RoGuide').then((m) => ({ default: m.RoGuide })))

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<SiteShell />}>
              <Route index element={<Home />} />
              <Route path="zp-ps" element={<ZpPsPage />} />
              <Route path="sarpanch-panch" element={<SarpanchPage />} />
              <Route
                path="ro-margdarshan"
                element={
                  <Suspense fallback={<div className="min-h-dvh" aria-busy="true" />}>
                    <RoGuide />
                  </Suspense>
                }
              />
              {/* old paths used by the source site */}
              <Route path="zp-ps.html" element={<Navigate to="/zp-ps" replace />} />
              <Route path="panch-sarpanch.html" element={<Navigate to="/sarpanch-panch" replace />} />
              <Route path="ro-guide" element={<Navigate to="/ro-margdarshan" replace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
