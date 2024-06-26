import React, { Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import StoreProvider from 'app/providers/StoreProvider/ui/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface componentRenderOptions {
    route?:string
    initialState?:DeepPartial<StateSchema>
}

export function componentRender(component:React.ReactNode, options:componentRenderOptions = {}) {
    const { route, initialState } = options;
    return render(
    // @ts-ignore
        <Suspense fallback={null}>
            <StoreProvider initialState={initialState as StateSchema}>
                <MemoryRouter initialEntries={[route]}>
                    <I18nextProvider i18n={i18nForTests}>
                        {component}
                    </I18nextProvider>
                </MemoryRouter>
            </StoreProvider>
        </Suspense>,
    );
}
