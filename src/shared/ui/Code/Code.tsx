import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { copyToClipboard } from 'shared/lib/window/windowUtils';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    children:React.ReactNode
}

const Code = ({ className, children }: CodeProps) => (
    <pre className={classNames(cls.Code, {}, [className])}>
        <Button onClick={() => copyToClipboard(children.toString())} theme={ThemeButton.CLEAR} square className={cls.copyBtn}><CopyIcon /></Button>
        <code>
            {children}
        </code>
    </pre>
);

export default Code;
