import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string
    height?:string | number
    width?:string | number
    border?:string | number
    style?:CSSProperties

}

const Skeleton = ({
    className, height = 100, width = 100, border, style,
}: SkeletonProps) => {
    const styles:CSSProperties = {
        height,
        width,
        borderRadius: border,
        ...style,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        >
        </div>
    );
};

export default Skeleton;
