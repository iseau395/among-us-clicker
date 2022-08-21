// @ts-check
import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import replace from "@rollup/plugin-replace";

const production = !process.env.ROLLUP_WATCH;


function serve() {
    let server;


    function toExit() {
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });

            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}

const config = {
    input: `src/index.ts`,
    output: {
        sourcemap: !production,
        format: 'iife',
        name: 'app',
        file: `public/build.js`
    },
    inlineDynamicImports: true,
    plugins: [
        replace({
            sourceMap: !production,
            preventAssignment: true,

            isProduction: production
        }),

        svelte({
            preprocess: sveltePreprocess({
                sourceMap: !production,
            }),
            compilerOptions: {
                dev: !production,
                filename: `public/build.js`
            }
        }),
        css({ output: `build.css` }),

        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production,
            rootDir: "src",
            tsconfig: "./tsconfig.json"
        }),

        !production && serve(),

        production && terser()
    ],
    watch: {
        clearScreen: false,
    }
};

export default config;