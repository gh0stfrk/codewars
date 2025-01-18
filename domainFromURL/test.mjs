import { domainName } from "./problem.js";
import { assert } from "chai";

// console.log(domainName('https://gmail.com'))

describe('Testing with valid domains', () => {
    it('Test with protocol', () => {
        assert.strictEqual(domainName('https://google.com'), 'google')
        assert.strictEqual(domainName('http://google.com'), 'google')
    })
    it('Test without protocol', () => {
        assert.equal(domainName('github.com'), 'github')
    })
})


describe('Invalid Domains shall fail!', () => {
    it('should fail for an invalid string', () => {
        assert.equal(domainName('zuzu'), 'zuzu')
    })
})



