//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isUpper = (str) => {
  return str.toUpperCase() === str;
}

export const hey = (message) => {
  message = message.trim()
  if (/^[\\t\\n\\r\\s ].*$/.test(message) || message === "") {
    return 'Fine. Be that way!';
  } else if (/[a-z0-9].*\?$/.test(message) || !/[A-Za-z0-9].*/.test(message)) {
      return 'Sure.';
  }  else if (/[A-Z].*\?$/.test(message)) {
    return 'Calm down, I know what I\'m doing!';
  } else if (/[A-Z].*$/.test(message) && isUpper(message)) {
    return 'Whoa, chill out!';
  } else {
    return 'Whatever.';
  }
};
