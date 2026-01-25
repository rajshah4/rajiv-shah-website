## Rajiv Shah Website 💯

Here is the code for my [personal web site](http://www.rajivshah.com)

This is forked from Manu Arora's [simple-developer-portfolio-website](https://github.com/manuarora700/simple-developer-portfolio-website).  Here are some links to learn more about the template I used:

There is a blog on [freeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/), describing and explaining how Manu built this application from the ground up.


The website is deployed on [Vercel](https://vercel.com) and uses:

- [Next.js](https://nextjs.org) for building React Components.
- [tailwindcss](https://tailwindcss.com) for styling.
- [React Rough Notation](https://roughnotation.com) for Hero section highlighting.
- [Vercel](https://vercel.com) for deployments and CI/CD.

## Case Study Library (protected)

The case study browser lives at `/problem-framing/case-studies` and is protected by Basic Auth.

Required environment variables:

- `CASE_STUDIES_USER`
- `CASE_STUDIES_PASSWORD`

To set them in Vercel:

1. Open the Vercel dashboard and select the project.
2. Go to `Settings` -> `Environment Variables`.
3. Add `CASE_STUDIES_USER` and `CASE_STUDIES_PASSWORD` for `Production` (and `Preview` if you want).
4. Redeploy after saving.
