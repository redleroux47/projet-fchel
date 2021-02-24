export const connectDb = (dbName, version, table) => {
	const openDB = indexedDB.open(dbName, version);

	openDB.onerror = function () {
		console.error('Error', openDB.error);
	};

	openDB.onsuccess = function () {
		let db = openDB.result;
		console.log('Success', openDB);
		db.onversionchange = function () {
			db.close();
			alert('Database is outdated, please reload the page.');
		};
	};

	openDB.onupgradeneeded = function () {
		let db = openDB.result;
		// Create it if it doesn't exist
		if (!db.objectStoreNames.contains(table)) {
			db.createObjectStore(table, { keyPath: 'id' });
		}
	};
	return openDB;
};

export const addData = (dbName, version, table, id = 0, data = {}) => {
	const openDB = connectDb(dbName, version, table);
	openDB.onsuccess = function () {
		let db = openDB.result;
		console.log('second time connect');

		let transaction = db.transaction(table, 'readwrite');
		transaction.oncomplete = function () {
			console.log('Transaction is complete');
		};

		let datas = transaction.objectStore(table);

		let save = {
			id,
			data,
		};
		let request = datas.add(save);
		request.onsuccess = function () {
			// (4)
			console.log('Book added to the store', request.result);
		};
		request.onerror = function () {
			console.log('Error', request.error);
		};
	};
};

// export const readData = (dbName, version, table) => {
// 	const openDB = connectDb(dbName, version, table);
// };
