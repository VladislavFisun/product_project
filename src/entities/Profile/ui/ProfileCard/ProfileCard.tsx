import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared/ui/Typography/Typography';
import { IProfile } from 'entities/Profile/model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import ProfilePageHeader from 'entities/Profile/ui/ProfilePageHeader/ProfilePageHeader';
import { CodeInput } from 'shared/ui/CodeInput/CodeInput';
import { memo } from 'react';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Currency } from 'shared/const/common';
import Select, { SelectOptions } from 'shared/ui/Select/Select';
import { getCurrencyList } from 'shared/lib/utils';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?:IProfile
    loading?: boolean
    error?: string
    readOnly?:boolean
    toggleReadonly?: () => {payload: undefined, type: string}
    updateLastname?: (value: string) => void
    updateFirstname: (value: string) => void
    updateAge: (value: string) => void
    updateCountry: (value: string) => void
    updateAvatar: (value: string) => void
    updateUsername: (value: string) => void
    updateCurrency: (value: string) => void
    saveProfileData: () => void
}

export const ProfileCard = memo(({
    className,
    data,
    loading,
    error,
    readOnly,
    toggleReadonly,
    updateLastname,
    updateFirstname,
    updateAge,
    updateCountry,
    updateUsername,
    updateAvatar,
    updateCurrency,
    saveProfileData,
}: ProfileCardProps) => {
    const { t } = useTranslation();

    const currencyList = getCurrencyList();

    if (loading) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loader]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.profileCard, { [cls.loader]: true }, [className, cls.error])}>
                <Typography state="error">{t('Ошибка при загрузке страницы')}</Typography>
            </div>
        );
    }
    return (
        <div className={classNames('', {}, [className])}>
            <ProfilePageHeader saveProfileData={saveProfileData} toggleReadonly={toggleReadonly} readOnly={readOnly} />
            <div className={cls.profileCard}>
                { data?.avatar && <Avatar className={cls.avatar} src={data?.avatar} alt="avatar" />}
                <CodeInput readOnly={readOnly} className={cls.input} onChange={(e) => updateFirstname(e.target.value)} value={data?.firstname} placeholder={t('Ваше имя')} />
                <CodeInput readOnly={readOnly} className={cls.input} onChange={(e) => updateLastname(e.target.value)} value={data?.lastname} placeholder={t('Ваша фамилия')} />
                <CodeInput type="number" readOnly={readOnly} className={cls.input} onChange={(e) => updateAge(e.target.value)} value={data?.age} placeholder={t('Возраст')} />
                <CodeInput readOnly={readOnly} className={cls.input} onChange={(e) => updateUsername(e.target.value)} value={data?.username} placeholder={t('Имя пользователя')} />
                <CodeInput readOnly={readOnly} className={cls.input} onChange={(e) => updateAvatar(e.target.value)} value={data?.avatar} placeholder={t('Введите ссылку на аватар')} />
                <CodeInput readOnly={readOnly} className={cls.input} onChange={(e) => updateCountry(e.target.value)} value={data?.country} placeholder={t('Страна')} />
                <Select disabled={readOnly} onChange={updateCurrency} className={cls.input} label={t('Валюта')} options={currencyList} value={data?.currency} />
            </div>
        </div>
    );
});
