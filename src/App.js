import './App.css';
import Hello from './components/hello';
import Message from './components/message'
function App() {
  return (
    <div className = "App">
      <Hello/>
      <Message content ={'passing data from props!'} sender={'cam'}/>
      <Message content ={"another instance with content"} sender={"mariana"}/>
      <Message content ={"hello this is a prop called content"}/>
    </div>
  );
}

export default App();
