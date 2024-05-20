import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    className?: string
}

const ArticleCodeBlock = ({ className }: ArticleCodeBlockProps) => (
    <div className={classNames('', {}, [className])}>
    </div>
);

export default ArticleCodeBlock;
