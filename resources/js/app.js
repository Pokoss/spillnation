import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

InertiaProgress.init();

createInertiaApp({
    title: title => `${title}`,
    resolve: async (name) => {
        return (await import(`./Pages/${name}.jsx`)).default
    },
    setup({ el, App, props }) {
        const container = document.getElementById('app');
        const root = createRoot(container, el);
        root.render(React.createElement(App, props));
    },
});


const SendAnalytics = () => {
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
}

// if (process.env.NODE_ENV === 'production') {
//     ReactGA.initialize('G-SWHCBVQ4PC');
//     reportWebVitals(SendAnalytics)
// }