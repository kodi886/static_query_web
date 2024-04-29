function findDataIndex(queryKey, queryValue) {
    for (var key in jsonData) {
        if (jsonData.hasOwnProperty(key)) {
            if (jsonData[key][queryKey] === queryValue) {
                return key;
            }
        }
    }
    return null;
}

var dataIndex = findDataIndex("result", "Result 10");
console.log("Data index with result 'Result 10':", dataIndex);
