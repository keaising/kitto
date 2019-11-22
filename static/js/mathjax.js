window.MathJax = {
    loader: {
        load: ['input/tex','output/svg']
    },
    tex: {
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
        ]
    },
    svg: {
        fontCache: 'global'
    },
};

(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg-full.js';
    script.async = true;
    document.head.appendChild(script);
})();