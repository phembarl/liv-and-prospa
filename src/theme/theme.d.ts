/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';

import { colors } from './colors';
import { fonts } from './fonts';

type ColorTokens = Partial<typeof colors>;
type FontTokens = Partial<typeof fonts>;

declare module '@emotion/react' {
    export interface Theme {
        colors?: ColorTokens;
        fonts?: FontTokens;
    }
}
