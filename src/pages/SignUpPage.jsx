import { SignContainer } from "../components";
import { SignUpForm } from "../components";

const SignUpPage = () => {
  return (
		<SignContainer
			welcomeText=
				"Simplify your coding journey and achieve your goals faster."
			
      paragraph="Devvie helps you track progress, build projects, manage time,
								increase productivity, collaborate and get job offers"
		>
			<SignUpForm />
		</SignContainer>
	);
}

export default SignUpPage