const initAlpha = 0.2;
const lastAlpha = 0.5;
const getBackgroundColor = (colors) =>
  `linear-gradient(0deg,rgba(${colors[0]}, ${colors[1]}, ${colors[2]},${initAlpha}),rgba(${colors[0]}, ${colors[1]}, ${colors[2]},${lastAlpha}))`;

export { getBackgroundColor };
