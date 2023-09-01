import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./Root"
import { LandingPage, Login, NotFound, Signup } from "./landingPage/pages";
import ComingSoon from "./careers/ComingSoon"



const App = () => {
  const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root />}>
				<Route index element={<LandingPage />} />
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<Signup />} />
				<Route path='hire-developers' element={<ComingSoon />} />
				<Route path='discover-projects' element={<ComingSoon />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		)
	);



  return (
    <RouterProvider router={router}/>
  )
}

export default App