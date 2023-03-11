import logo from './logo.svg';
import './App.css';  

function goToAuthor() {
  window.open("../Author.html");
}
function App() {


  return (
    
    
    <div id="MainDiv">
      <div id="Sokoban_Title">
    </div>
    <div id="MenuDiv">
    <h1 class>Sokoban</h1>      
      <button id="StartBtn"class="button-54" >Start</button>
      <br></br>
      <button id="AuthorBtn" class="button-54" onClick={goToAuthor  }>Author</button>
    </div>
    </div>

   
    
    
  );
}

export default App;
