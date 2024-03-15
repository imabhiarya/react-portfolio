import todoImg from './assets/todo.png';
import galleryImg from './assets/gallaeria.png'
import weatherImg from './assets/weather.png'
import CurConvImg from './assets/currencyConverter.png'
import randomGifImg from './assets/randomGif.png'

const data = {
    todo : {
        img : todoImg,
        title : "Todo Web App",
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React']
    },
    gallery: {
        img : galleryImg,
        title : 'Art Gallery Showcase',
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React']
    },
    weather : {
        img : weatherImg,
        title : 'Weather Web App',
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React']
    },
    currency: {
        img : CurConvImg,
        title: "Currency Converter",
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React'] 
    },
    randomgif : {
        img : randomGifImg,
        title : "Random Gif Generator",
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript', 'React']
    }
}
export default data;