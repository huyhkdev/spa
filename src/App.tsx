import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Services } from './pages/Services';
// import { Booking } from './pages/Booking';
// import { News } from './pages/News';
// import { NewsDetail } from './pages/NewsDetail';
import { Contact } from './pages/Contact';

function AppContent() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hinh-anh" element={<Gallery />} />
          <Route path="/dich-vu" element={<Services />} />
          {/* <Route path="/dat-lich" element={<Booking />} /> */}
          {/* <Route path="/tin-tuc" element={<News />} />
          <Route path="/tin-tuc/:id" element={<NewsDetail />} /> */}
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;
