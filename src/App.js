
import Content from './Content'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
function App() {
  const context=useContext(ThemeContext)
  return (
  <div className="">
     <button
     onClick={context.handleClick}
     >Change</button> 
     <Content />
  </div>
  )
}
export default App;
