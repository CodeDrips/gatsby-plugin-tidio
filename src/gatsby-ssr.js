import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  var tidioId = pluginOptions.tidioId
  var source = "//code.tidio.co/" + tidioId + ".js",
  
  return setPostBodyComponents([
    <script
      key="gatsby-plugin-tidio"
      src={source}
    />
  ]);
};
