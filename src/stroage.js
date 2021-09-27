function setData(key, value) {
	chrome.storage.sync.set({ key: value }, function () {
		console.log(`setData: { ${key} : ${value} }`);
	});
}

function getData(key) {
	let res = chrome.storage.sync.get(key);
	console.log(`getData: { ${key} : ${res} }`);
	return res;
}

export { setData, getData };
