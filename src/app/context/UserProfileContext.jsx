import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { firestore, storage } from "../../firebase";
import { v4 } from "uuid";
import { AuthContext } from "../../context";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const UserProfileContext = createContext();

export const UserProfileContextProvider = ({ children }) => {
	const { user, setLoading } = useContext(AuthContext);

	const firstName = user?.displayName.split(" ")[0];
	const lastName = user?.displayName.split(" ")[1];
	const userId = user ? user.uid : null;
	const email = user?.email;
	const photo = user?.photoURL;
	const [userTechStack, setUserTechStack] = useState([]);
	const [isSaving, setIsSaving] = useState(false);

	const initialProfile = {
		firstName: firstName,
		lastName: lastName,
		username: "",
		jobTitle: "",
		location: "",
		aboutYou: "",
		isPublished: false,
		techStack: [],
		projects: [],
		workExperience: [],
		projectExperience: [],
		contact: [],
		hireMe: false,
		remotely: false,
		share: true,
		education: [],
		certification: [],
		socials: {
			email: email,
		},
		hasWorkExperience: false,
		coverPhoto: null,
		userPhoto: photo,
	};
	const [userProfile, setUserProfile] = useState(initialProfile);
	console.log(userProfile);

	const saveUserProfile = async () => {
		setIsSaving(true);
		try {
			const profileRef = doc(firestore, "usersProfile", userId);
			await setDoc(profileRef, userProfile);
			const profileSnapshot = await getDoc(profileRef);
			const profileData = profileSnapshot.data();
			setUserProfile(profileData);
		} catch (error) {
			console.log("error occured", error);
		} finally {
			setIsSaving(false);
		}
	};

	const handleFileUpload = async (event, imageKey) => {
		const file = event.target.files[0];
		console.log(imageKey);

		// const storageRef = ref(storage, `images/${userId}`);
		if (file) {
			try {
				if (user) {
					const fileRef = ref(
						storage,
						`images/${userId}/${imageKey}/img${file.name + v4()}`
					);
					await uploadBytes(fileRef, file);

					const downloadURL = await getDownloadURL(fileRef);

					// Update myImages state
					setUserProfile((prevProfile) => ({
						...prevProfile,
						[imageKey]: downloadURL,
					}));

					console.log(userProfile);

					console.log(`${imageKey} uploaded successfully!`);
				} else {
					return;
				}
			} catch (error) {
				console.error(`Error handling ${imageKey} upload:`, error);
			}
		}
	};

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				if (user) {
					setLoading(true);
					const profileRef = doc(firestore, `usersProfile/${userId}`);
					const profileSnapshot = await getDoc(profileRef);
					const profileData = profileSnapshot.data();
					setUserProfile(profileData);
				}
			} catch (error) {
				console.error("Error fetching profile:", error);
			} finally {
				setLoading(false);
			}
		};

		// Call fetchProfile only if there's a user
		if (user) {
			fetchProfile();
		}
	}, [user, userId]); // Include userId in the dependency array if it's used in fetchProfile

	return (
		<UserProfileContext.Provider
			value={{
				userProfile,
				setUserProfile,
				userTechStack,
				setUserTechStack,
				isSaving,
				saveUserProfile,

				handleFileUpload,
			}}
		>
			{children}
		</UserProfileContext.Provider>
	);
};

export default UserProfileContext;
