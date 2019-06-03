// module.exports = {
//   presets: [
//     [
//       "@babel/preset-env",
//       {
//         useBuiltIns: "entry"
//         // "targets": {
//         //   "browsers": ["last 1 version", "ie >= 11"]
//         // }
//       }
//     ]
//   ],
//   plugins: ["@babel/plugin-syntax-dynamic-import"]
// };

module.exports = {
  presets: [
    [
      "@vue/app",
      {
        useBuiltIns: "entry",
        corejs: {
          version: 2,
          proposal: true
        }
      }
    ]
  ]
};
