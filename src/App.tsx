import "./App.css";
import { BoardProvider } from "./context/BoardContext";
import MainLayout from "./layout/MainLayout";
import { BoardContent } from "./components/BoardContent";

function App() {
  return (
    <BoardProvider>
      <MainLayout>
        <BoardContent />
      </MainLayout>
    </BoardProvider>
  );
}

export default App;
