module.exports = function(eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("css");
  
  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_layouts"
    },
    pathPrefix: "/BYOA-Static-Site/"
  };
}; 