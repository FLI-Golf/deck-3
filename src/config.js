import Highlight from 'reveal.js/plugin/highlight/highlight';
import Markdown from 'reveal.js/plugin/markdown/markdown';
import MathReveal from 'reveal.js/plugin/math/math';
import RevealNotes from 'reveal.js/plugin/notes/notes';

// Import theme
import 'reveal.js/dist/theme/black.css';

// Override theme background to deep blue
const style = document.createElement('style');
style.textContent = `
  :root { --r-background-color: #0a1628 !important; }
  .reveal { background: #0a1628 !important; background-color: #0a1628 !important; }
  body { background: #0a1628 !important; }
  .reveal .slide-background { background-color: #0a1628 !important; }
  .reveal .slides { background: transparent; }
`;
document.head.appendChild(style);

// Import CSS for plugins
import 'reveal.js/plugin/highlight/monokai.css';

export default {
    // App Config
    app: {
        name: 'FLI Golf League',
    },
    // Reveal Config
    reveal: {
        plugins: [Highlight, Markdown, MathReveal.MathJax2, MathReveal.KaTeX, RevealNotes],
        hash: true,
        backgroundColor: '#0a1628',
        transition: 'slide',
        transitionSpeed: 'default',
        backgroundTransition: 'fade',
        pdfSeparateFragments: false,
      mathjax2: {
        config: 'TeX-AMS_HTML-full',
        TeX: {
          Macros: {
            R: '\\mathbb{R}',
            set: [ '\\left\\{#1 \\; ; \\; #2\\right\\}', 2 ]
          }
        }
      },
    },
};
