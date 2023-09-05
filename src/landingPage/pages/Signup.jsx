import { Form, SignCard } from "../components";

const Signup = () => {
  return (
		<SignCard>
			<Form
				paragraph={"Create a free account below"}
				welcomeText={"Welcome to Devvie! "}
				moreInfo={"Or sign up with "}
				buttonText={"sign up"}
			/>
		</SignCard>
	);
}

export default Signup