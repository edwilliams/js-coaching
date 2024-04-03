/**
 * Template tag to convert HTML into a string
 * For syntax highlighting only
 * @param {string[]} strings
 * @param {...*} keys
 * @returns {string}
 */
export function html(strings, ...keys) {
  return strings.flatMap((string, i) => [string, keys[i]]).join("")
}
