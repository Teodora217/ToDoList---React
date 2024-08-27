import Footer from "./Components/Footer"
import Header from "./Components/Header"
import ToDoList from "./Components/ToDoList"

function App() {
  
  return (
    <div>     
     <Header />

    <main className="main"> 
    <ToDoList />
    </main>

     <Footer />

    </div>   
  )
}

export default App
