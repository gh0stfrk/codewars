import { assert } from 'chai';
import { isValidIP } from './problem.js'

describe('validateIPv4Address', () => {
    it('should return true for valid IPv4 addresses', () => {
        assert.strictEqual(isValidIP('0.0.0.0'), true, "failed for 0.0.0.0")
        assert.strictEqual(isValidIP("12.255.56.1"), true, "failed for 12.255.56.1");
    });

    it('should return false for invalid IPv4 addresses', () => {
        assert.strictEqual(isValidIP('abc.def.ghi.jkl'), false, "failed at abc.def.ghi.jkl");
        assert.strictEqual(isValidIP('12.34.56'), false, "failed at 12.34.56");
        assert.strictEqual(isValidIP('123.456.789.0'), false, "failed at 123.456.789.0");
        assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false, "failed at 1e0.1e1.1e2.2e2");
        assert.strictEqual(isValidIP('01.02.03.06'), false, "failed at 01.02.03.06");
    });

    it('should return false for non-IPv4 inputs like empty strings or non-string inputs', () => {
        assert.strictEqual(isValidIP(''), false)
        assert.strictEqual(isValidIP(null), false)
    });
});