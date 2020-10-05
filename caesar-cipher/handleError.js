const handleError = (message) => {
  console.error(message);
  process.exit(1);
};

module.exports = handleError;
