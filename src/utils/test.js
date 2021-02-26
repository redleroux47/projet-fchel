export const ToConnectDB = () => {
	const openDB = indexedDB.open('abc', 1);
	openDB.onsuccess = function () {
		let db = openDB.result;
		console.log('Success', openDB);
		db.onversionchange = function () {
			db.close();
			alert('Database is outdated, please reload the page.');
		};
	};
	openDB.onerror = function () {
		console.error('Error', openDB.error);
	};
	openDB.onupgradeneeded = function () {
		let db = openDB.result;
		// Create it if it doesn't exist
		if (!db.objectStoreNames.contains('abc')) {
			const store = db.createObjectStore('abc', { keyPath: 'id' });
			store.createIndex('iid', 'id', { unique: true });
		}
	};
	openDB.then(function (db) {
		let transaction = db.transaction('abc', 'readwrite');
		let store = transaction.objectStore('abc');
		store.add({ name: 'fred', id: 'zzz' });
		return transaction.complete;
	});
};
