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
            context: "./src/context",
            mocks: "./src/mocks",
            models: "./src/models",
            screens: "./src/screens",
            services: "./src/services",
            styles: "./src/styles",
          },
        },
      ],
    ],
  };
};
