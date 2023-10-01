// import axios from "axios";

const IncrementButton = () => {
  const element = document.getElementById("incrementText");
  let value = element.innerHTML;
  ++value;
  document.getElementById("incrementText").innerHTML = value;
};

const baseUrl = "http://localhost:3001/";

const GetNotes = async () => {
  try {
    const response = await axios.get(baseUrl);
    const notes = response.data;
    Adder(notes);
    return notes;
  } catch (error) {
    console.log(error);
  }
};

const Adder = (notes) => {
  const element = document.getElementById("add-notes");
  if (notes) {
    notes.map((note) => {
      let li = document.createElement("li");
      li.innerText = note.content;
      element.appendChild(li);
    });
  }
};
