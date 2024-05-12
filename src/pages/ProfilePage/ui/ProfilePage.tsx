import { classNames } from 'shared/lib/classNames/classNames';
import { fetchProfileData, profileActions, ProfileCard } from 'entities/Profile';
import { useDispatch, useSelector } from 'react-redux';
import {
    getProfileData, getProfileError,
    getProfileFormData,
    getProfileLoading,
    getProfileReadonly,
} from 'entities/Profile/model/selectors/profileSelectors';
import { useCallback, useEffect } from 'react';
import { IProfile } from 'entities/Profile/model/types/profile';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const dispatch = useDispatch();
    const profileData = useSelector(getProfileFormData);
    const profileError = useSelector(getProfileError);
    const profileLoading = useSelector(getProfileLoading);
    const profileReadOnly = useSelector(getProfileReadonly);

    const saveProfileData = useCallback(() => dispatch(updateProfileData()), [dispatch]);

    const toggleReadonly = useCallback(() => dispatch(profileActions.toggleReadOnly()), [dispatch]);

    const updateFirstname = useCallback((value:string) => {
        dispatch(profileActions.updateProfile({ firstname: value }));
    }, [dispatch]);

    const updateLastname = useCallback((value:string) => {
        dispatch(profileActions.updateProfile({ lastname: value }));
    }, [dispatch]);

    const updateAge = useCallback((value:string) => {
        dispatch(profileActions.updateProfile({ age: value }));
    }, [dispatch]);
    const updateCountry = useCallback((value:string) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);
    const updateAvatar = useCallback((value:string) => {
        dispatch(profileActions.updateProfile({ avatar: value }));
    }, [dispatch]);
    const updateUsername = useCallback((value:string) => {
        dispatch(profileActions.updateProfile({ username: value }));
    }, [dispatch]);

    const updateCurrency = useCallback((value:string) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    useEffect(() => {
        const getProfile = async () => {
            await dispatch(fetchProfileData());
        };
        getProfile();
    }, [dispatch]);
    return (
        <div className={classNames('', {}, [className])}>
            <ProfileCard
                updateFirstname={updateFirstname}
                updateLastname={updateLastname}
                updateCountry={updateCountry}
                saveProfileData={saveProfileData}
                updateAvatar={updateAvatar}
                updateCurrency={updateCurrency}
                updateUsername={updateUsername}
                updateAge={updateAge}
                toggleReadonly={toggleReadonly}
                readOnly={profileReadOnly}
                data={profileData}
                error={profileError}
                loading={profileLoading}
            />
        </div>
    );
};

export default ProfilePage;
