import { nanoid } from 'nanoid'
import { FaTwitter, FaGithub, BiHomeAlt2, FaFolderOpen, FaLinkedinIn} from 'react-icons/all'
import cocktailImg from '../assets/cocktail-img.jpg'
import menuImg from "../assets/menu-img.jpeg"
import toursImg from "../assets/tours-img.jpg"
import todoImg from '../assets/to-do-img.jpeg'
import sliderImg from '../assets/slider-img.jpeg'
import questionsImg from '../assets/questions-img.jpeg'
import reviewsImg from '../assets/reviews-img.jpeg'
import birthdayImg from '../assets/birthday-img.jpeg'
export const pageLinks = [
    {
        id: nanoid(),
        name: 'home',
        path: '/',
        icon: <BiHomeAlt2 />

    },
    {
        id: nanoid(),
        name: 'projects',
        path: '/projects',
        icon: <FaFolderOpen />
    }
]

export const socialLinks = [
    {
        id: nanoid(),
        url: 'https://twitter.com/njaagagakure',
        icon: <FaTwitter />
    },
    {
        id: nanoid(),
        url: 'https://github.com/Njaaga-Gakure/',
        icon: <FaGithub />
    },
    {
        id: nanoid(),
        url: 'https://www.linkedin.com/in/brian-gakure-0a2320188/',
        icon: <FaLinkedinIn />
    }
]

export const projects = [
    {
        id: nanoid(),
        image: cocktailImg,
        title: "cocktail db",
        url: "https://cocktail-api-proj.netlify.app/"
    },
    {
        id: nanoid(),
        image: menuImg,
        title: "menus",
        url: "https://menu-service.netlify.app/"
       
    },
    {
        id: nanoid(),
        image: toursImg,
        title: "tours",
        url: "https://utali.netlify.app/"  
    },
    {
        id: nanoid(),
        image: todoImg,
        title: "to-do list",
        url: "https://to-do-react-site.netlify.app/"  
    },
    {
        id: nanoid(),
        image: sliderImg,
        title: "slider",
        url: "https://slidernetapp.netlify.app/"  
    },
    {
        id: nanoid(),
        image: questionsImg,
        title: "accordion",
        url: "https://utali.netlify.app/"  
    },
    {
        id: nanoid(),
        image: reviewsImg,
        title: "reviews",
        url: "https://reviews-proj.netlify.app/"  
    },
    {
        id: nanoid(),
        image: birthdayImg,
        title: "bash app",
        url: "https://bash-app.netlify.app/"  
    }
]

export const languages = [
    {
        id: nanoid(),
        name: "html"
    },
    {
        id: nanoid(),
        name: "javascript"
    },
    {
        id: nanoid(),
        name: "css"
    },
    {
        id: nanoid(),
        name: "reactjs"
    },
    {
        id: nanoid(),
        name: "nodejs"
    },
    {
        id: nanoid(),
        name: "expressjs"
    }
]