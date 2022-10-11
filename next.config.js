const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg", "mp4"],
  esModule: true,
  webpack(config, options) {
    return config;
  },
});
