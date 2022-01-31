import { DefaultTheme, keyframes } from 'styled-components';

export const theme: DefaultTheme = {
    // Colors
    textColor: {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#EFEFEF',
        navColor: '#BEBEBE',
    },
    backgroundColor: {
        mainColor: '#FBF8F9',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        gray: 'rgb(249 250 251)'
    },

    // Animation
    keyframe: {
        spin: keyframes`
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        `,

        pulse: keyframes`
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        `,
    },
}
