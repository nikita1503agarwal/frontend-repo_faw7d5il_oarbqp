import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './Layout'
import Home from './Home'
import Test from './Test'
import { AboutPage, CommitteesPage, ProjectsPage, ExchangesPage, TeamPage, MembershipPage, PartnersPage, ContactPage } from './pages/StaticPages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/committees" element={<CommitteesPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/exchanges" element={<ExchangesPage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/membership" element={<MembershipPage/>} />
          <Route path="/partners" element={<PartnersPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
