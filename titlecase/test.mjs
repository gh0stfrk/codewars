import { assert } from 'chai';
import { titleCase } from './problem.js';


describe("Validating titleCase", ()=>{
    it('should return title case',()=>{
        const testPairs = [
            {
                "input": ["a clash of KINGS", 'a an the of'],
                "output": 'A Clash of Kings'
            },
            {
                "input": ['THE WIND IN THE WILLOWS', 'The In'],
                "output": 'The Wind in the Willows'
            }
        ]

        testPairs.forEach((pair)=>{
            assert.equal(
                titleCase(pair.input[0], pair.input[1]),
                pair.output
            )
        })
    })

    it('should return empty string for empty titles', ()=>{
        assert.equal(titleCase('', ''), '')
    })
})


