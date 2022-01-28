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
}

interface IKeyframe {
    spin: Keyframes;
    pulse: Keyframes;
    'slide-in': Keyframes;
    'slide-fwd': Keyframes;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        // Size
        margin: object;
        width: object;
        height: object;
        flex: object;
        maxHeight: object;
        minWidth: object;

        // Colors
        textColor: ITextColor;
        backgroundColor: IBackgroundColor;

        // Animation
        keyframe: IKeyframe;
    }
}
