import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => (
    <div className={classNames('', {}, [className])}>
        <ProfileCard />
    </div>
);

export default ProfilePage;
