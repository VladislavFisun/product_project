import { Typography } from 'shared/ui/Typography/Typography';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    readOnly:boolean
    toggleReadonly?: () => {payload: undefined, type: string}
    saveProfileData: () => void
}

const ProfilePageHeader = ({ readOnly, toggleReadonly, saveProfileData }: ProfilePageHeaderProps) => {
    const { t } = useTranslation();
    return (
        <div className={cls.header}>
            <Typography className={cls.title} size="l">{t('Профиль')}</Typography>
            {readOnly
                ? <Button onClick={toggleReadonly} theme={ThemeButton.OUTLINE}>{t('редактировать')}</Button>
                : (
                    <>
                        <Button onClick={saveProfileData} className={cls.saveBtn} theme={ThemeButton.OUTLINE}>{t('Сохранить')}</Button>
                        <Button onClick={toggleReadonly} theme={ThemeButton.OUTLINE_RED}>{t('Закрыть')}</Button>
                    </>
                )}
        </div>
    );
};

export default ProfilePageHeader;
