const assert = require('assert');

// DOCS : https://mochajs.org/#getting-started

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('User', () => {
  describe('#save()', () => {
    it('should save without error', (done) => {
        const user = new User('John');
        user.save(done);
    });
  });
});