import { Header, Hero } from "../components";

const LandingPage = () => {
	return (
		<div className='max-w-[100vw] w-full mx-auto flex justify-center items-center overflow-x-hidden'>
			<Header />
			<main className='flex justify-center items-center w-full px-6 bg-whiteOff min-h-screen '>
				<Hero />
			</main>
			<footer></footer>
		</div>
	);
};

export default LandingPage;
