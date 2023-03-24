import './App.css';  

function goToAuthor() {
  window.location.replace("Author.html");
}
function goToGame(){
  window.location.replace("mainGame.html");

}
function App() {


  return (
    
    
    <div id="MainDiv">
      <div id="Sokoban_Title">
    </div>
    <div id="MenuDiv">
    <h1 class>Sokoban</h1>      
      <button id="StartBtn"class="button-54" onClick={goToGame} >Start</button>
      <br></br>
      <button id="AuthorBtn" class="button-54" onClick={goToAuthor }>Author</button> 
      
    </div>
    </div>

   
    
    
  );
}
//made by Leon R
export default App;
