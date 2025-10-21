var isEmpty = function(obj) {
  if (Array.isArray(obj) || typeof obj === "string") {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
};
