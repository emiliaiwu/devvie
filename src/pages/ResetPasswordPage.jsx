import { styles } from "../style/reusableStyles";
import { ResetPasswordForm } from "../components";


const ResetPasswordPage = () => {
	const { container, flexCenter } = styles;

	return (
		<section
			className={`${container} ${flexCenter} bg-offwhite ss:py-20 px-3 min-h-screen py-10`}
		>
			<div className='max-w-[500px] w-full flex justify-center items-center rounded-2xl p-3 backdrop border border-white'>
				<div className='w-full bg-white rounded-2xl lg:flex overflow-hidden gap-4'>
					<ResetPasswordForm />
				</div>
			</div>
		</section>
	);
};

export default ResetPasswordPage;
