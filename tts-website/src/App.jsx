import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TextToSpeech from './components/TextToSpeech';
import Blog from './components/Blog';
import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline';

export default function App() {
  return (
    <Router>
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-600">AI Voice Studio</span>
            </Link>
            <div className="flex gap-6">
              <Link to="/" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
              <Link to="/blog" className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                <BookOpenIcon className="h-5 w-5" />
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<TextToSpeech />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}