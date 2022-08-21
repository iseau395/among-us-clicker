// @ts-check
import ghpages from'gh-pages';

let errored = false;

ghpages.publish('public', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/iseau395/among-us-clicker',
        message: `Automatically update github pages branch`,
    },
    (err) => {
        errored = true;
        if (err) console.error(err);
    }
);

if (!errored)
    console.log("Successfully Published!");