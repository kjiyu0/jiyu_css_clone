const calcRem = (size) => `${size / 4}rem`;

const fontSizes = {
  small: calcRem(6),
  base: calcRem(8),
  lg: calcRem(14),
  xl: calcRem(20),
  xxl: calcRem(32),
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
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
const colors = {
  black: "#000000",
  black_text: "#333333",
  white: "#FFFFFF",
  gray_1: "#222222",
  gray_2: "#767676",
  gray_3: "#999999",
  gray_4: "#D0D0D0",
  gray_5: "#efefef",
  gray_6: "#f5f5f5",
  gray_border: "#dadada",
  green_1: "#3cb46e",
  title_character: "#9E7EB8",
  title_wallpaper: "#5593E4",
  title_sticker: "#F8A039",
  title_line: "#71B8BF",
  pink_text: "#FF0080",
  pink_text2: "#FF5FAF",
  navy_1: "#292B40",
  navy_2: "#505162",

  // ▽ 기존 데이터
  background: "#E5E5E5",
  backgroundPink: "#F38CA1",
  textPinkStanding: "#eaa7c5",
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletAir: "820px",
  tabletL: "1024px",
};

const device = {
  mobileS: `(min-width: ${deviceSizes.mobileS})`,
  mobileM: `(min-width: ${deviceSizes.mobileM})`,
  mobileL: `(min-width: ${deviceSizes.mobileL})`,
  tablet: `(min-width: ${deviceSizes.tablet})`,
  tabletL: `(min-width: ${deviceSizes.tabletL})`,
  // pc: `(max-width: ${deviceSizes.tabletL})`,
  tabletM: `(max-width: ${deviceSizes.tabletAir})`,
  mobile: `(max-width: ${deviceSizes.mobileL})`,
};

const theme = {
  fontSizes,
  paddings,
  margins,
  interval,
  verticalInterval,
  colors,
  deviceSizes,
  device,
  //   gradient,
};

export default theme;
