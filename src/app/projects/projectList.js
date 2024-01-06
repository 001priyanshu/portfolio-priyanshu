import { hero, todolist, calorie, tictactoe, quiz,swaad,neurotrain,querysolver,recipemaker,quizapp} from '../images/index'
import { portfoliopic } from '../images/index';
const list = [
    {
        id: 1,
        title: "NeuroTrain",
        link: 'https://lessonifyy.vercel.app/',
        about: "Welcome to your ultimate health companion! Our website not only tracks your calories but transforms your diet into a personalized wellness experience. Enjoy real-time insights, receive motivational email updates, and explore intuitive tools for effortless fitness. Redefine your relationship with food, embrace a healthier lifestyle, and let us guide you on your journey to a happier you!",
        technologies: ['MERN', '', '', 'tailwind', '', '', 'bcrypt'],
        image: neurotrain,
    },
    {
        id:2,
        title:'Food HUB',
        link:'',
        about:'This is a webiste for a cloud kitchen at kolkata, where you can order food online,you can find about different dishes and also you can contact them through this website.',
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
        about: 'Play the classic Tic Tac Toe game with your friends and family. Enjoy the game with a beautiful UI and a smooth experience.',
        technologies: ['React', 'Web-Sockte','Tailwind','Nodejs','Chakra-UI'],
        image: querysolver,
    }, {
        id: 5,
        title: 'Recipe Maker',
        link: 'https://drive.google.com/file/d/1n5OV5bqzFsxOhwPekbdb9rlUmdUDiJIo/view',
        about: 'Create your own to-do list and manage your tasks. Add, delete, and update your tasks with a beautiful UI.',
        technologies: ['Reactjs', 'MERN', 'Firebase', 'bcrypt'],
        image: recipemaker,
    }, {
        id: 6,
        title: "Quiz App",
        link: 'https://quiz-aiy81ca09-001priyanshu.vercel.app/',
        about: "Elevate your DSA expertise with our quiz app! Quickly test your Skills. Receive instant feedback on your performance and uncover correct answers at the quiz's conclusion. Assess and enhance your understanding of DSA effortlessly!",
        technologies: ['MERN', 'tailwind','redux'],
        image: quizapp,
    }
];
export default list;