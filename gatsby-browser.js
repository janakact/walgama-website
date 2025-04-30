/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//
import WebFont from 'webfontloader';

export const onClientEntry = () => {
  // Add a loading class before font loads
  document.documentElement.classList.add('fonts-loading');

  WebFont.load({
    custom: {
      families: ["SinhalaAstro, DankFMBindumathiMono"],
      urls: ['/fonts/fonts.css'],
    },
    active: () => {
      document.documentElement.classList.remove('fonts-loading');
      document.documentElement.classList.add('fonts-loaded');
    },
    inactive: () => {
      document.documentElement.classList.remove('fonts-loading');
    },
  });
};
