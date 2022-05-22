function createArray(collection) {
    let array;
    if (typeof collection === 'object') {
        array = myValues(collection);
    }
    else {
        array = collection;
    }
    return array;
}

function myEach(collection , callback) {
    let array = createArray(collection);
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
    return collection;
}

function myMap (collection, callback) {
    let array = createArray(collection);
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }
    return newArray;
}

function myReduce(collection, callback, acc=undefined) {
    let array = createArray(collection);
    acc = getInitialAcc(array, acc);
    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], array);
    }
    return acc;
}

function getInitialAcc(array, acc) {
    if (acc === undefined) {
        acc = array[0];
        array.shift();
    }
    return acc;
}

function myFind(collection, predicate) {
    let array = createArray(collection);
    let found = false;
    let value = undefined;
    let i = 0;
    while (!found && i < array.length) {
        if (predicate(array[i]) === true) {
            value = array[i];
            found = true;
        }
        else {
            i++;
        }
    }
    return value;
}

function myFilter(collection, predicate) {
    let array = createArray(collection);
    let finalArray = [];
    for (let i = 0; i < array.length; i++) {
        if(predicate(array[i]) === true) {
            finalArray.push(array[i]);
        }
    }
    return finalArray;
}

function mySize(collection) {
    let array = createArray(collection);
    return array.length;
}

function myFirst(array, n=1) {
    if (n === 1) {
        return array[0];
    }
    else {
        let finalArray = [];
        let i = 0;
        while (i < n && i < array.length) {
            finalArray.push(array[i]);
            i++;
        }
        return finalArray;
    }
}

function myLast(array, n=array.length) {
    if (n === array.length) {
        return array[n-1];
    }
    else {
        let finalArray = [];
        let i = array.length - 1;
        n = i - n;
        while (i > n && i > -1) {
            finalArray.unshift(array[i]);
            i--;
        }
        return finalArray;
    }
}

function myFlatten(array, shallow=false, newArr=[]) {
    if (shallow === true) {
        newArr = flatten(array, newArr);
        return newArr;
    }
    else {
        if (isFlat(array)) {
            return array;
        }
        else {
            newArr = flatten(array, newArr);
            return myFlatten(newArr);
        }
    }
}

function flatten(array, newArr) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length) {
            for (let j = 0; j < array[i].length; j++) {
                newArr.push(array[i][j])
            }
        }
        else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

function isFlat(array) {
    let i = 0;
    let flat = true;
    while (i < array.length && flat === true) {
        if (array[i].length) {
            flat = false;
        }
        i++;
    }
    return flat;
}

function myKeys(object) {
    let array = [];
    for (let keys in object) {
        array.push(keys);
    }
    return array;
}

function myValues(object) {
    let array = [];
    for(let keys in object) {
        array.push(object[keys]);
    }
    return array;
}
