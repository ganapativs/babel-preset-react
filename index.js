module.exports = function() {
  return {
    presets: [
      [
        require("@babel/preset-env").default,
        {
          modules: false
        }
      ],
      require("@babel/preset-react").default
    ]
  };
};
