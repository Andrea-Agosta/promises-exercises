const { promises } = require('graceful-fs');

/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {thunk} action
 *
 */
function waitForPromise(promise, action) {
  /* IMPLEMENT ME */
  return new Promise((resolve) => {
    promise.then(() => resolve(action()));
  });
}
/**
 *
 * EXERCISE 2
 *
 * @param {Promise} promise
 * @param {consumer} consumer
 * @param {handler} handler
 */
function consumePromise(promise, consumer, handler) {
  /* IMPLEMENT ME! */
  promise.then((res) => consumer(res)).catch((err) => handler(err));
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};
