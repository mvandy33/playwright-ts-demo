import * as _ from 'lodash';

/**
 * Compare two objects for equality
 * @param actual 
 * @param expected 
 * @returns Empty string if equal - string with object descriptions if not equal
 */
export function compare(actual?: object, expected?: object) {
    // Ensure nullable objects are defined
    if (actual == undefined) {
        throw Error('Cannot compare objects because "actual" was undefined');
    }
    if (expected == undefined) {
        throw Error('Cannot compare objects because "expected" was undefined');
    }

    let pruned = prune(actual, expected);
    if (!_.isEqual(pruned.result1, pruned.result2)) {
        return `${JSON.stringify(pruned.result1, null, 2)}\n\ndid not equal\n\n${JSON.stringify(pruned.result2, null, 2)}`
    }
    return '';
}

/**
 * Get two objects that have only common properties from the initial inputs
 * @param obj1 
 * @param obj2 
 * @returns 
 */
function prune(obj1: object, obj2: object) {
    let sharedKeys = Object.keys(obj1).filter(key => Object.keys(obj2).includes(key));
    return {
        result1: _.pick(obj1, sharedKeys),
        result2: _.pick(obj2, sharedKeys)
    };
}