import { DefaultTheme, keyframes } from 'styled-components';

export const theme: DefaultTheme = {
    // Size
    margin: {
        320: '320px',
    },
    width: {
        190: '190px',
        275: '275px',
        300: '300px',
        340: '340px',
        350: '350px',
        656: '656px',
        880: '880px',
        508: '508px',
    },
    height: {
        80: '80px',
        340: '340px',
        370: '370px',
        420: '420px',
        510: '510px',
        600: '600px',
        685: '685px',
        800: '800px',
        '90vh': '90vh',
    },
    flex: {
        0.7: '0.7 1 0%',
    },
    maxHeight: {
        370: '370px',
    },
    minWidth: {
        210: '210px',
        350: '350px',
        620: '620px',
    },

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

        'slide-in': keyframes`
            from { transform: 'translateX(-200px)', }
            to { transform: 'translateX(0px)', }
        `,

        'slide-fwd': keyframes`
            from { transform: 'translateZ(0px)'; }
            to { transform: 'translateZ(160px)'; }
        `,
    },
}
