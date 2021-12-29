import './App.css'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'
function Paragraph(){
    const context = useContext(ThemeContext);
    console.log(context)
    return (
        <div className="">
            <p className={context.theme}>Nội dung công viêc</p>
        </div>
    )
}
export default Paragraph