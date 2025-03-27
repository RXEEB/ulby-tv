import { About } from "../components/pages/About"
import Posts from '../components/pages/Posts'
import { PostIdpage } from "../components/pages/PostIdpage"
import { Login } from "../components/pages/Login"

export const privateRoutes = [
    { path: '/about', element: <About />, exact: true },
    { path: '/', element: <Posts />, exact: true },
    { path: '/:id', element: <PostIdpage />, exact: true }
]

export const publicRoutes = [
    { path: '/', element: <Login />, exact: true },
]

