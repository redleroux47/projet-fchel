import React, { useState } from 'react';
//import { readDataByKey } from '../utils/indexedDB';

function FormToDisplay() {
	const [form, setForm] = useState('');
	//const [display, setDisplay] = useState(undefined);
	const handleSubmit = (e) => {
		e.preventDefault();
		//const { dbName, version, table, id } = form;
		//setDisplay(readDataByKey(dbName, version, table, id));
	};

	const handleChange = (e) => {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	// console.log('display state ==>', display);
	return (
		<div className="form">
			<h1>Reading data from IndexedDB</h1>
			<form onSubmit={handleSubmit}>
				<label>dbName :</label>
				<input type="text" id="dbName" name="dbName" onChange={handleChange} />

				<label>version :</label>
				<input
					type="number"
					id="version"
					name="version"
					onChange={handleChange}
				/>

				<label>table :</label>
				<input type="text" id="table" name="table" onChange={handleChange} />

				<label>id :</label>
				<input type="text" id="id" name="id" onChange={handleChange} />

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default FormToDisplay;
