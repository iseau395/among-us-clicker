// @ts-check
import ghpages from'gh-pages';

const beta = process.argv[2] == "beta";

let errored = false;

ghpages.publish('public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/iseau395/among-us-clicker',
        message: `Automatically update github pages branch`,
        remove: beta ? 'beta/**/*' : '!beta/**/*',
        dest: beta ? 'beta' : '.'
    },
    (err) => {
        errored = true;
        if (err) console.error(err);
    }
);

if (!errored)
    console.log("Successfully Published!");