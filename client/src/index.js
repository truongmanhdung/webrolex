import Header from './components/header/index'
import routes from './routes'
import Footer from './components/footer/index'

const display = async (page, afterRender) => {
    document.querySelector('#header').innerHTML = await page;
    if(afterRender){
        await afterRender()
    }
}
document.querySelector('#header').innerHTML = display(Header.render(), Header.afterRender)
document.querySelector('#footer').innerHTML = Footer.render()

window.addEventListener('DOMContentLoaded', routes())
