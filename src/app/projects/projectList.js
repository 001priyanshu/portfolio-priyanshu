import {swaad,neurotrain,querysolver,recipemaker,quizapp} from '../images/index'
import { portfoliopic } from '../images/index';
const list = [
    {
        id: 1,
        title: "NeuroTrain",
        link: 'https://lessonifyy.vercel.app/',
        about: "This application is primarily used to identify cognitive disabilities in people of any age. It does this by taking a screening test and estimating a user's likelihood of having a disability such as dyslexia or dyscalculia. It also offers various ways to monitor a patient's progress and create a graph as a result.",
        technologies: ['MERN', '', '', 'tailwind', '', '', 'bcrypt'],
        image: neurotrain,
    },
    {
        id:2,
        title:'Food HUB',
        link:'',
        about:'Built a cross-platform React Native app using Expo CLI, featuring restaurant favoriting, local storage, GoogleMaps integration for restaurant display, Firebase for user authentication, and added animations to the home screen.',
        technologies: ['React Native', 'Expo CLI', 'Firebase', 'CSS'],
        image:swaad,
    },
    {
        id:3,
        title:'Portfolio',
        link:'',
        about:'This is my portfolio website, Where you can find all my projects and blogs, and also you can contact me through this website.',
        technologies:['Reactjs','Tailwind CSS'],
        image:portfoliopic,
    },{
        id: 4,
        title: 'Query Solver',
        link: 'https://drive.google.com/file/d/1hgqggkTCGiok0oQ7q-s1cZjkixJUXHyR/view?usp=sharing',
        about: 'Essentially, query solver is a client-administrator platform where clients can ask questions if they have any, and users from the organization can respond to those requests by means of live chat. ',
        technologies: ['React', 'Web-Sockte','Tailwind','Nodejs','Chakra-UI'],
        image: querysolver,
    }, {
        id: 5,
        title: 'Recipe Maker',
        link: 'https://drive.google.com/file/d/1n5OV5bqzFsxOhwPekbdb9rlUmdUDiJIo/view',
        about: 'Recipe Maker is an application that allows users to share recipes by uploading pictures, details about the preparation procedure, and an estimate of the ingredients needed. It also has features that allow users to edit, remove, and like/comment on their own posts as well as see other users recipes that are posted on the platform.',
        technologies: ['Reactjs', 'MERN', 'Firebase', 'bcrypt'],
        image: recipemaker,
    }, {
        id: 6,
        title: "Quiz App",
        link: 'https://quiz-aiy81ca09-001priyanshu.vercel.app/',
        about: "This program functions as a platform similar to the well-known game show KBC, where users are given questions and prizes for answering correctly. If they answer a question incorrectly, the total money earned thus far will be earned and game will over, and if they answer correctly, they move on to the next one. ",
        technologies: ['MERN', 'tailwind','redux'],
        image: quizapp,
    }
];
export default list;