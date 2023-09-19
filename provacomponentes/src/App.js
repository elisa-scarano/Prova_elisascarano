import Noticia from './components/noticia';
import Categoria from './components/categoria';
import './App.css';


function App() {
  return (
    <div className="Container">
      <Categoria categoria="Famosos" />
      <Noticia/>
    </div>
  );
}

export default App;


