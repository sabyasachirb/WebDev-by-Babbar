import UserCard from "../components/UserCard"
import "./App.css"
import UserImage from '../src/assets/gemini_sabyasachi.png'
import srb from '../src/assets/srb.jpg'
import skrb from '../src/assets/skrb.jpg'


function App() {


  return (
    <div className="container"  style={{"border-radius":"10px"}}>
      <UserCard name = "Sabyasachi Roy Barman" desc= "desc1" image={UserImage} />
      <UserCard name = "Soumya Roy Barman" desc= "desc2" image={srb}/>
      <UserCard name = "Snigdha Roy Barman" desc= "desc3" image={skrb}/>
    </div>
  )
}

export default App
