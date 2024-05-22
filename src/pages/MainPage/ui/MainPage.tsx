import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Popover } from 'shared/ui/Popover/Popover';
import { VirtualList } from 'shared/lib/virtualization/virtualization';

const MainPage = () => {
    const { t } = useTranslation();
    const testRef = useRef<HTMLButtonElement>(null);
    return (
        <div>
            {t('Главная страница')}
            <Popover>
                <Popover.Content>
                    <div>content</div>
                </Popover.Content>
                <Popover.Trigger><button>123</button></Popover.Trigger>
            </Popover>
            <VirtualList />
        </div>
    );
};

export default MainPage;
