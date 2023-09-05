import { Form, SignCard } from "../components";

const Signin = () => {
	return (
		<SignCard>
			<Form
				paragraph={"Enter your details below"}
				welcomeText={"Welcome Back!"}
				moreInfo={"Or sign in with"}
				buttonText={"sign in"}
			/>
		</SignCard>
	);
};

export default Signin;
