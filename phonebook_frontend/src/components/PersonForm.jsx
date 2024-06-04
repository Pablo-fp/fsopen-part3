<<<<<<< HEAD
import React from "react";

const PersonForm = ({
  addPerson,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
=======
const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
>>>>>>> 3716055c2e1ef5b4adcd7ff7c58a4f98d4b9b912
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
<<<<<<< HEAD
        name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input value={newName} onChange={handleNameChange} required />
      </div>
      <div>
        number:&nbsp;&nbsp;
        <input value={newNumber} onChange={handleNumberChange} required />
=======
        name:
        <input
          value={newName}
          onChange={({ target }) => setNewName(target.value)}
        />
      </div>
      <div>
        number:
        <input
          value={newNumber}
          onChange={({ target }) => setNewNumber(target.value)}
        />
>>>>>>> 3716055c2e1ef5b4adcd7ff7c58a4f98d4b9b912
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
