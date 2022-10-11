const boxShadow = `-webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.6);
  -moz-box-shadow:    4px 4px 5px 0px rgba(50, 50, 50, 0.6);
  box-shadow:         4px 4px 5px 0px rgba(50, 50, 50, 0.6);`;

const DarkTheme = {
  colors: {
    primary: "#fff", //
    secondary: "#fff", //
    success: "#2CBF6E", //
    fail: "#F24643", //
    sidebarActiveTextColor: "#2CA4D8",
    tabActiveBgColor: "#F1F4F8",
    sidebarBorder: "#2CA4D8",
    appBg: "#363c48",
    grey: "lightgrey",
    hamburger: "#fff",
    lightGrey: "#7F878A",
    tableHead: "#2CA4D8",
  },

  boxShadow,

  borderRadius: "12px",
};

const LightTheme = {
  colors: {
    primary: "#242424", //
    secondary: "#2CA4D8", //
    success: "#2CBF6E", //
    fail: "#F24643", //
    sidebarActiveTextColor: "#2CA4D8",
    tabActiveBgColor: "#F1F4F8",
    sidebarBorder: "#2CA4D8",
    appBg: "#fff",
    grey: "lightgrey",
    hamburger: "#363c48",
    lightGrey: "#7F878A",
    tableHead: "#E5E5E5",
  },

  boxShadow,

  borderRadius: "12px",
};

export { DarkTheme, LightTheme };
