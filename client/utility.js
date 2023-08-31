function splitCamelCase(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1 $2');
  }


export { splitCamelCase }