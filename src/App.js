import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Form from './components/Form';

const App = () => {
	const [ notes, setNotes ] = useState([]);

	const addNote = (note) => {
		setNotes([ ...notes, note ]);
	};

	const deleteNote = (uniqueId) => {
		const newArr = notes.filter((ele, idx) => {
			return idx !== uniqueId;
		});
		setNotes(newArr);
	};

	return (
		<React.Fragment>
			<Header />
			<Form addNote={addNote} />
			{notes.map((ele, idx) => {
				return (
					<Note key={idx} title={ele.title} content={ele.content} deleteNote={deleteNote} uniqueId={idx} />
				);
			})}
			<Footer />
		</React.Fragment>
	);
};
export default App;
