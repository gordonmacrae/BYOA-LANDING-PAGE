module.exports = function(eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("css");

  // Add date filter for blog posts
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

    if (format === "%B %d, %Y") {
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    return d.toLocaleDateString();
  });

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_layouts"
    },
    pathPrefix: "/BYOA-LANDING-PAGE/"
  };
};