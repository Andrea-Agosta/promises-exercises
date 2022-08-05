/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise
      .then((resp) => {
        resolve(
          new Promise((resolve, reject) => {
            resolve(transformer(resp));
            reject(transformer(resp));
          })
        );
      })
      .catch((err) => reject(transformer(err)));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then(
    /* IMPLEMENT ME! */
    (resp) => {
      return new Promise((resolve, reject) => {
        if (!isNaN(parseInt(resp))) {
          resolve(parseInt(resp) * parseInt(resp));
        } else {
          reject(`Cannot convert '` + resp + `' to a number!`);
        }
      });
    }
  );
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(
    /* IMPLEMENT ME! */
    (resp) => {
      return new Promise((resolve, reject) => {
        if (isNaN(parseInt(resp))) {
          resolve(0);
        }
        reject(resolve(0));
      });
    }
  );
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
