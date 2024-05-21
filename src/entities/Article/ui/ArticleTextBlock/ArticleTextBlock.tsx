import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleBlock as ArticleTextBlockType } from 'entities/Article/model/types/article.types';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './ArticleTextBlock.module.scss';

interface ArticleTextBlockProps {
    className?: string
    article?: ArticleTextBlockType
}

const ArticleTextBlock = memo(({ className, article }: ArticleTextBlockProps) => (
    <div className={classNames('', {}, [className])}>
        {article?.title && <Typography as="header" type="title" className={cls.title}>{article?.title}</Typography>}
        {article?.paragraphs && article?.paragraphs?.map((paragraph, index) => (
            <Typography
                className={cls.paragraph}
                key={index}
            >
                {paragraph}
            </Typography>
        ))}
    </div>
));

export default ArticleTextBlock;
