import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string
}

const ArticleTextBlock = ({ className }: ArticleTextBlockProps) => (
    <div className={classNames('', {}, [className])}>
    </div>
);

export default ArticleTextBlock;
