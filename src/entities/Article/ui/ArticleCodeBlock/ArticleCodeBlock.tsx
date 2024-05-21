import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import Code from 'shared/ui/Code/Code';
import { ArticleBlock } from 'entities/Article/model/types/article.types';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    className?: string
    article?:ArticleBlock
}

const ArticleCodeBlock = memo(({ className, article }: ArticleCodeBlockProps) => (
    <div className={classNames('', {}, [className])}>
        <Code>{article?.code}</Code>
    </div>
));

export default ArticleCodeBlock;
