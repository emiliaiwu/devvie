import AccentColor from "./AccentColor";
import BorderRadius from "./BorderRadius";
import FontStyle from "./FontStyle";
import LightDarkMode from "./LightDarkMode";
import { UserPreferencesContext } from "../../context";
import { useContext, useEffect } from "react";
import { OutlineButton, ColoredButton } from "../../components/Button";
import { ClipLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

const Theme = () => {
	const {
		handleSavePreferences,
		handleResetPreferences,
		handleCancelPreferences,
		newUserPreferences,
		isUpdating,
		isUpdated,
		setIsUpdated,
		isReseting,
	} = useContext(UserPreferencesContext);

	const location = useLocation();

	useEffect(() => {
		setIsUpdated(false);
		handleCancelPreferences();
	}, [location.pathname]);

	return (
		<section
			style={{ backgroundColor: newUserPreferences.shade.card }}
			className={` flex-1 ml-8 p-10 rounded-tl-3xl`}
		>
			<div
				style={{
					borderBottom: `1px solid ${newUserPreferences.shade.other}`,
				}}
				className='mb-8 px-2'
			>
				<h2
					style={{
						fontFamily: newUserPreferences.font.fontFamily,
						color: newUserPreferences.shade.text.primaryText,
					}}
					className='text-2xl pb-4 font-medium'
				>
					Appearance
				</h2>
			</div>
			<div className=' flex flex-col gap-8 mb-5 px-2'>
				<div>
					<h3
						style={{
							fontFamily: newUserPreferences.font.fontFamily,
							color: newUserPreferences.shade.text.primaryText,
						}}
						className='text-base font-medium'
					>
						Choose your accent color
					</h3>
					<AccentColor />
				</div>

				<div className='mb-2'>
					<h3
						style={{
							fontFamily: newUserPreferences.font.fontFamily,
							color: newUserPreferences.shade.text.primaryText,
						}}
						className='text-base mb-5 font-medium'
					>
						Choose your border style
					</h3>
					<BorderRadius />
				</div>
				<div>
					<h3
						style={{
							fontFamily: newUserPreferences.font.fontFamily,
							color: newUserPreferences.shade.text.primaryText,
						}}
						className='text-base mb-5 font-medium'
					>
						Choose your preferred font
					</h3>
					<FontStyle />
				</div>
				<div>
					<h3
						style={{
							fontFamily: newUserPreferences.font.fontFamily,
							color: newUserPreferences.shade.text.primaryText,
						}}
						className='text-base mb-5 font-medium'
					>
						Choose your preferred mode
					</h3>

					<LightDarkMode />
				</div>
			</div>
			<div className='flex justify-between mt-20 py-4 px-2'>
				<div>
					<button
						onClick={handleResetPreferences}
						className='flex justify-center items-center'
					>
						<OutlineButton
							border={newUserPreferences.border}
							font={newUserPreferences.font.fontFamily}
							color={newUserPreferences.color}
							textColor={newUserPreferences.shade.text.primaryText}
						>
							{isReseting ? (
								<ClipLoader loading={true} color={"#FFFFFF"} size={32} />
							) : (
								<span>Reset to default</span>
							)}
						</OutlineButton>
					</button>
				</div>

				<div className='flex flex-row gap-10'>
					<button
						onClick={handleCancelPreferences}
						style={{
							fontFamily: newUserPreferences.font.fontFamily,
							color: newUserPreferences.shade.text.primaryText,
						}}
						className='font-medium hover:opacity-50 transition-all duration-200 ease py-[10px] px-3'
					>
						Cancel
					</button>{" "}
					<button
						onClick={handleSavePreferences}
						className='flex justify-center items-center'
					>
						<ColoredButton
							border={newUserPreferences.border}
							font={newUserPreferences.font.fontFamily}
							color={newUserPreferences.color}
						>
							{isUpdating ? (
								<ClipLoader loading={true} color={"#FFFFFF"} size={32} />
							) : (
								<span>{isUpdated ? "Preferences saved" : "Save Preferences"}</span>
							)}
						</ColoredButton>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Theme;
