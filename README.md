# gatsby-plugin-tidio

A simple plugin that adds the tidio live chat window [https://www.tidio.com/panel/login] to every page of your Gatsby site.

sign up for a free account at [https://www.tidiochat.com]



## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-tidio
```

or

```
npm install gatsby-plugin-tidio
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-tidio`,
      options: {
        tidioId: "YOUR_TIDIO_ID",
        // get this from the tidio script widget
      },
    },
  ],
};
```