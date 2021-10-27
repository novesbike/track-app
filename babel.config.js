module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            assets: "./src/assets",
            components: "./src/components",
            constants: "./src/constants",
            context: "./src/context",
            data: "./src/data",
            models: "./src/models",
            navigation: "./src/navigation",
            screens: "./src/screens",
            services: "./src/services",
          },
        },
      ],
    ],
  };
};
