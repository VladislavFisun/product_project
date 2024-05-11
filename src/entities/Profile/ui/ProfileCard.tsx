import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileData, getProfileError, getProfileLoading } from 'entities/Profile/model/selectors/profileSelectors';
import { useEffect } from 'react';
import { fetchProfileData } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography/Typography';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const dispatch = useDispatch();
    const profileData = useSelector(getProfileData);
    const profileError = useSelector(getProfileError);
    const profileLoading = useSelector(getProfileLoading);

    useEffect(() => {
        const getProfile = async () => {
            await dispatch(fetchProfileData());
        };
        getProfile();
    }, [dispatch]);
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Typography className={cls.title}>{t('Профиль')}</Typography>
                <Button theme={ThemeButton.OUTLINE}>{t('редактировать')}</Button>
            </div>
            <div className={cls.profile}>
                <Input className={cls.input} value={profileData?.firstname} placeholder={t('Ваше имя')} />
                <Input className={cls.input} value={profileData?.lastname} placeholder={t('Ваша фамилия')} />
            </div>
        </div>
    );
};
