import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleBlock } from 'entities/Article/model/types/article.types';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    className?: string
    article?:ArticleBlock
}

const ArticleImageBlock = memo(({ className, article }: ArticleImageBlockProps) => (
    <figure className={classNames(cls.ArticleImageBlock, {}, [className])}>
        <img src={article?.src} alt={article?.title} />
        <figcaption>
            <Typography>
                {article?.title}
            </Typography>
        </figcaption>
    </figure>
));

export default ArticleImageBlock;
