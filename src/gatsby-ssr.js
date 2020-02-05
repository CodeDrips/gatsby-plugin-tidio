const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }, { tidioId, development = true }) => {
  let source = "//code.tidio.co/" + tidioId + ".js"

  if (!development && process.env.NODE_ENV === 'development') {
    console.log(
      '"development" is set to false - gatsby-plugin-zendesk-chat will not load in development mode',
    )
    return null
  }

  if (!tidioId) {
    console.log(
      'No Tidio key provided! gatsby-plugin-tidio will not load. Please add tidioId in gatsby-config.js',
    )
    return null
  }

  return setPostBodyComponents([
    <script
      key="gatsby-plugin-tidio"
      src={source}
    />
  ]);
};
