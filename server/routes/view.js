exports.get = (req, res /*, next*/) => {
  res.type("text/html");
  res.send("<p>I'll give you view!</p>");
};
