import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  let tidioId = pluginOptions.tidioId
  let source = "//code.tidio.co/" + tidioId + ".js"
  
  return setPostBodyComponents([
    <script
      key="gatsby-plugin-tidio"
      src={source}
    />
  ]);
};
