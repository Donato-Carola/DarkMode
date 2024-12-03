import { useState,useEffect } from "react";
import Cards from "./components/Cards/Cards";
import ChangeButton from "./components/ChangeButton/ChangeButton";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
 
  };

    // Effetto per aggiornare la classe del body quando cambia il tema
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("bg-gray-900", "text-white");
        document.documentElement.classList.remove("bg-white", "text-black");
      } else {
        document.documentElement.classList.add("bg-white", "text-black");
        document.documentElement.classList.remove("bg-gray-900", "text-white");
      }
    }, [isDarkMode]);

  return (
    <div >
    
      <ChangeButton toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Cards isDarkMode={isDarkMode} />
    </div>
  );
}
export default App;
