import Conference from "./Conference";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedBack } from "./FeedBack";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Conference />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/conference/:id" element={<FeedBack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
