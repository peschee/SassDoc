/**
 * Checks whether the line is a comment
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isComment = function (line) {
  return line.match(/^\/{2,}/i) || line.match(/^\s*\/?\*+\/?/i);
};

/**
 * Checks whether the line is a parameter
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isParam = function (line) {
  return line.match(/^@(?:param|arg|argument|parameter)(?:\s+{\s*([\w-](?:\s*\|?\s*[\w-])*)\s*})?\s+(?:\$([\w-]+))(?:\s+\(([\w-\s]+)\))?(?:\s+-\s*?([\w-\s]+))?/i);
};

/**
 * Checks whether the line is a return
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isReturns = function (line) {
  return line.match(/^@returns(?:\s+{\s*([\w-](?:\s*\|?\s*[\w-])*)\s*})(?:\s+([\w-\s]*))?/i);
};

/**
 * Checks whether the line is an access
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isAccess = function (line) {
  return line.match(/^@(private|public|protected)/i) || line.match(/^@access\s+(private|public|protected)/i);
};

/**
 * Checks whether the line is a separator
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isSeparator = function (line) {
  return line.match(/^---/i);
};

/**
 * Checks whether the line is a function or a mixin
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isFunctionOrMixin = function (line) {
  return line.match(/@(function|mixin)\s+([\w-]+)/i);
};

/**
 * Checks whether the line is an empty line
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isEmpty = function (line) {
  return line.match(/^\s*$/i);
};

/**
 * Checks whether the line is a deprecation
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isDeprecated = function (line) {
  return line.match(/^@deprecated(?:\s+(.+))?/i);
};

/**
 * Checks whether the line is an author
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isAuthor = function (line) {
  return line.match(/^@author\s+(.+)/i);
};

/**
 * Checks whether the line is a todo
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isTodo = function (line) {
  return line.match(/^@todo\s+(.+)/i);
};

/**
 * Checks whether the line is an ignore
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isIgnore = function (line) {
  return line.match(/^@ignore\s+(.+)/i);
};

/**
 * Checks whether the line is a throw
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isThrows = function (line) {
  return line.match(/^@throws\s+(.+)/i);
};

/**
 * Checks whether the line is an alias
 * @param  {string}  line - line to check
 * @return {Boolean}
 */
module.exports.isAlias = function (line) {
  return line.match(/^@alias\s+(.+)/i);
};
