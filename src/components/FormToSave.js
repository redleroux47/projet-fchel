import React, { useState } from 'react';
import { addData } from '../utils/indexedDB';
function FormToSave() {
	const [form, setForm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const { dbName, version, table, id, data } = form;
		addData(dbName, version, table, id, data);
	};

	const handleChange = (e) => {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	return (
		<div className="form">
			<h1>Saving Data to IndexedDb</h1>
			<form onSubmit={handleSubmit}>
				<label>dbName :</label>
				<input
					type="text"
					id="dbName"
					name="dbName"
					value={form?.dbName}
					onChange={handleChange}
				/>

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

				<label>data :</label>
				<input type="text" id="data" name="data" onChange={handleChange} />

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default FormToSave;
