import todoImg from './assets/todo.png';
import galleryImg from './assets/gallaeria.png'
import weatherImg from './assets/weather.png'
import CurConvImg from './assets/currencyConverter.png'
import randomGifImg from './assets/randomGif.png'

const data = {
    todo : {
        img : todoImg,
        title : "Todo Web App",
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React'],
        website:"https://to-do-silk-eta.vercel.app/"
    },
    gallery: {
        img : galleryImg,
        title : 'Art Gallery Showcase',
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React'],
        // website:"https://random-gif-generator-ochre-beta.vercel.app/"
    },
    weather : {
        img : weatherImg,
        title : 'Weather Web App',
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React'],
        website:"https://weather-app-henna-one.vercel.app/"
    },
    currency: {
        img : CurConvImg,
        title: "Currency Converter",
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript','React'], 
        website:"https://currency-converter-ls6zoc389-imabhiaryas-projects.vercel.app/"
    },
    randomgif : {
        img : randomGifImg,
        title : "Random Gif Generator",
        techstack : ['HTML', 'Tailwind CSS', 'JavaScript', 'React'],
        website:"https://random-gif-generator-ochre-beta.vercel.app/"
    }
}
export default data;