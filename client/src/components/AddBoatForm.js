const AddBoatForm = ({onBoatSubmission}) => {
  // would probably refactor this to be a controlled component
  let name, color, length;
  const submit = e => {
    e.preventDefault();
    onBoatSubmission({
      name: name.value, 
      color: color.value, 
      length: length.value
    });
    name.value = '';
    color.value = '';
    length.value = '';
    name.focus();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Boat name" ref={input => name = input} required />
      <input type="text" placeholder="Color" ref={input => color = input} required />
      <input type="number" placeholder="Length" ref={input => length = input} required />
      <button>Add Boat</button>
    </form>
  );
  };

export default AddBoatForm;