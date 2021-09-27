/**
 * Set data to sync storage
 * @param {string} key
 * @param {string} value
 * @returns {void} none
 */
function setData(key, value) {
	chrome.storage.sync.set({ key: value }, function () {
		console.log(`setData: { ${key} : ${value} }`);
	});
}

/**
 * Get data from sync storage
 * @param {string} key
 * @returns {string} value
 */
function getData(key) {
	let res = chrome.storage.sync.get(key);
	console.log(`getData: { ${key} : ${res} }`);
	return res;
}

export { setData, getData };
