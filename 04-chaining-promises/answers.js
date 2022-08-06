/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then(
        /* IMPLEMENT ME! */
        (resp) => {
          resolve(asyncTransformer(resp));
        }
      )
      .catch((err) => reject(err));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then(
    /* IMPLEMENT ME! */ (resp) => {
      return new Promise((resolve) => {
        resolve(slowAsyncProcess(resp));
      });
    }
  );
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    /* IMPLEMENT ME! */
    return new Promise((resolve) => {
      getUserById(userId).then((user) => {
        if (user !== undefined) {
          getOrganizationById(user.organizationId).then(
            (organizzationResponse) => {
              user.organization = organizzationResponse;
              resolve(user);
            }
          );
        } else {
          resolve(user);
        }
      });
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
