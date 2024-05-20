import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    className?: string
}

const ArticleImageBlock = ({ className }: ArticleImageBlockProps) => (
    <div className={classNames('', {}, [className])}>
    </div>
);

export default ArticleImageBlock;
