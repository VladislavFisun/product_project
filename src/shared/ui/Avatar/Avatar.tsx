import { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?:string
    size?:number
    alt?:string
}

const Avatar = ({
    size,
    alt = 'avatar',
    className,
    src,
}: AvatarProps) => {
    const styles = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img src={src} style={styles} className={classNames(cls.avatar, {}, [className])} alt={alt} />
    );
};

export default Avatar;
