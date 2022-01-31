import 'styled-components';

interface ITextColor {
    lightGray: string;
    primary: string;
    secColor: string;
    navColor: string;
}

interface IBackgroundColor {
    mainColor: string;
    secondaryColor: string;
    blackOverlay: string;
    gray: string;
}

interface IKeyframe {
    spin: Keyframes;
    pulse: Keyframes;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        // Colors
        textColor: ITextColor;
        backgroundColor: IBackgroundColor;

        // Animation
        keyframe: IKeyframe;
    }
}
