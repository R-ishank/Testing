import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Accordianfilter from "./Accordianfilter";
import CouponCard from "./userpage";
import UserDetails from "./UserDetails";
import Accordianfilter1 from "./Middlepage";
export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/filter" element={<Accordianfilter />}/>
        <Route path="/userpage" element={<CouponCard/>}/>
        <Route path="/detail" element={<UserDetails />}/>
        <Route path="/middle" element={<Accordianfilter1 />}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);