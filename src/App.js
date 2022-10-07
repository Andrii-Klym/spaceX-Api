import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components"
import {
  Homepage,
  Error,
  Capsules,

  Crew,
  SingleCrew,
  Dragons,
  SingleDragon,
  Landpads,
  SingleLandPad,
  Launchpads,
  SingleLaunchPad,
  Roadster,
  Rockets,
  SingleRocket,
  Ships,
  SingleShip,
  
} from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/:id" element={<SingleCrew />}></Route>
        <Route path="/dragons" element={<Dragons />}></Route>
        <Route path="/dragons/:id" element={<SingleDragon />}></Route>
        <Route path="/landpads" element={<Landpads />}></Route>
        <Route path="/landpads/:id" element={<SingleLandPad />}></Route>
        <Route path="/launchpads" element={<Launchpads />}></Route>
        <Route path="/launchpads/:id" element={<SingleLaunchPad />}></Route>
        <Route path="/roadster" element={<Roadster />}></Route>
        <Route path="/rockets" element={<Rockets />}></Route>
        <Route path="/rockets/:id" element={<SingleRocket />}></Route>
        <Route path="/ships" element={<Ships />}></Route>
        <Route path="/ships/:id" element={<SingleShip />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
