const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
};

const interval = {
    base: calcRem(50),
    lg: calcRem(100),
    xl: calcRem(150),
    xxl: calcRem(200),
};

const verticalInterval = {
    base: `${calcRem(10)} 0 ${calcRem(10)} 0`,
};

const deviceSizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '450px',
    tablet: '768px',
    tabletL: '1024px',
};

const colors = {
    base: '#71c1c5',
    black: '#000000',
    white: '#FFFFFF',
};

const device = {
    mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
    mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
    mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
    tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
    tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};

const theme = {
    fontSizes,
    colors,
    deviceSizes,
    device,
    interval,
    verticalInterval,
};

export default theme;
