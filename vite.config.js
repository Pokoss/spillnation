import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },

    server: {
        strictPort: true,
        port: 3000
    },

    plugins: [
        react(),
        laravel([
            'resources/css/app.css',
            'resources/js/app.js',
        ]),
        //add blade plugin to reload page on change blade files
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        }
    ],
});
