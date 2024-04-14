import "./App.css";
import DefaultPage from "./Components/DefaultPage";
import { UserProvider } from "./Components/UserContext";
import { EducationProvider } from "./Components/EducationContext";
import { ExperienceProvider } from "./Components/ExperienceContext";
function App() {
  return (
    <div className="App">
      
            <DefaultPage />
          
    </div>
  );
}

export default App;
