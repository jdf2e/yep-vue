module.exports = [
  require('autoprefixer')({
        // browsers: ['last 2 versions']
    browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8'],
  }),
  require('postcss-px2rem')({
        // browsers: ['last 2 versions']
    baseDpr: 2,             // base device pixel ratio (default: 2)
    threeVersion: false,    // whether to generate @1x, @2x and @3x version (default: false)
    remVersion: true,       // whether to generate rem version (default: true)
    remUnit: 100,            // rem unit value (default: 75)
    remPrecision: 6,         // rem precision (default: 6)
  }),
];
