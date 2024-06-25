const textarea = document.querySelector("textarea");
const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener("click", () => {
  textarea.value = "";
})
const hideSeek = (para) => {
  if (para.style.display === "none") {
    para.style.display = "";
  } else if (para.style.display === "") {
    para.style.display = "none";
  }
}
const homeBtn = document.querySelector("#home");
const note1 = document.querySelector("#note-1");
const note2 = document.querySelector("#note-2");
const note3 = document.querySelector("#note-3");
const note4 = document.querySelector("#note-4");
const saveBtn = document.querySelector("#save-btn");
const savedNotesMsg=document.querySelector('#saved-notes-msg');
const savedMsg=document.querySelector('#saved-msg');
savedMsg.style.display='none';
const titles = [];
const notes = [];
const inputTitle = document.querySelector("#inputName");
const notePad = document.querySelector(".notepad");
const newNote = document.querySelector(".show");
const home = () => {
  hideSeek(notePad);
  hideSeek(newNote);
  hideSeek(save);
  hideSeek(savedMsg)
};
const save = document.querySelector("#saved");
hideSeek(note1);
hideSeek(note2);
hideSeek(note3);
hideSeek(note4);
hideSeek(inputTitle);
notePad.style.display = "none";
const noteVal = () => {
  if (note1.textContent === "") {
    titles[0] = inputTitle.value;
    notes[0] = textarea.value;
    note1.innerHTML = `<h2 class='text-3xl '>${titles[0]}</h2> <br> ${notes[0]}`;
   if (titles[0]!==''&&notes[0]!=='') {
      hideSeek(savedMsg);
   }
  } else if (note1.textContent !== "" && note2.textContent === "") {
  titles[1] = inputTitle.value;
    notes[1] = textarea.value;
    note2.innerHTML = `<h2 class='text-3xl '>${titles[1]}</h2><br>${notes[1]}`;
    if (titles[1]!==''&&notes[1]!=='') {
        hideSeek(savedMsg);
     }
  }else if (
    note1.textContent !== "" &&
    note2.textContent !== "" &&
    note3.textContent === ""
  ) {
  titles[2] = inputTitle.value;
    notes[2] = textarea.value;
    note3.innerHTML = `<h2 class='text-3xl '>${titles[2]}</h2>  <br>  ${notes[2]}`;
  if (titles[2]!==''&&notes[2]!=='') {
      hideSeek(savedMsg);
   }
  } else if (
    note1.textContent !== "" &&
    note2.textContent !== "" &&
    note3.textContent !== "" &&
    note4.textContent === ""
  ) {
  titles[3] = inputTitle.value;
    notes[3] = textarea.value;
    note4.innerHTML = `<h2 class='text-3xl '>${titles[3]}</h2>  <br>  ${notes[3]}`;
  if (titles[3]!==''&&notes[3]!=='') {
      hideSeek(savedMsg);
   }}
}
newNote.addEventListener("click", () => {
  hideSeek(notePad);
  hideSeek(newNote);
  hideSeek(save);
  hideSeek(savedNotesMsg);
  inputTitle.style.display='';
  note1.style.display = "none";
  note2.style.display = "none";
  note3.style.display = "none";
  note4.style.display = "none";
  inputTitle.value = "";
  textarea.value = "";
  saveBtn.addEventListener("click", noteVal
                                        );
})
homeBtn.addEventListener("click", () => {
  home();
  if (note1.textContent !== "") {
    note1.style.display = "";
  }
  if (note2.textContent !== "") {
    note2.style.display = "";
  }
  if (note3.textContent !== "") {
    note3.style.display = "";
  }
  if (note4.textContent !== "") {
    note4.style.display = "";
  }
})
const noteToPad = (note) => {
  hideSeek(notePad);
  hideSeek(newNote);
  hideSeek(save);
  hideSeek(savedNotesMsg);
  note1.style.display = "none";
  note2.style.display = "none";
  note3.style.display = "none";
  note4.style.display = "none";
  inputTitle.value = titles[note];
  textarea.value = notes[note];
}
note1.addEventListener("click", () => {
  noteToPad(0);
  saveBtn.removeEventListener("click", noteVal);
  saveBtn.addEventListener("click", () => {
    titles[0] = inputTitle.value;
      notes[0] = textarea.value;
      note1.innerHTML = `<h2 class='text-3xl '>${titles[0]}</h2>  <br>  ${notes[0]}`;
  });
})
note2.addEventListener("click", () => {
  noteToPad(1);
  saveBtn.removeEventListener("click", noteVal);
  saveBtn.addEventListener("click", () => {
  titles[1] = inputTitle.value;
    notes[1] = textarea.value;
    note1.innerHTML = `<h2 class='text-3xl '>${titles[1]}</h2>  <br>  ${notes[1]}`;
});
})
note3.addEventListener("click", () => {
  noteToPad(2);
  saveBtn.removeEventListener("click", noteVal);
  saveBtn.addEventListener("click", () => {
  titles[2] = inputTitle.value;
    notes[2] = textarea.value;
    note1.innerHTML = `<h2 class='text-3xl '>${titles[2]}</h2>  <br>  ${notes[2]}`;
});
})
note4.addEventListener("click", () => {
  noteToPad(3);
  saveBtn.removeEventListener("click", noteVal);
  saveBtn.addEventListener("click", () => {
  titles[3] = inputTitle.value;
    notes[3] = textarea.value;
    note1.innerHTML = `<h2 class='text-3xl '>${titles[3]}</h2>  <br>  ${notes[3]}`;
});
})
