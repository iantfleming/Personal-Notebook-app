// Note class --> store note, process it, return a display element
// interface --> anything that touches the web page like Listeners or appending to the page


let notes = []

// this function allows the user to create a new note

let button = document.getElementById('create-button')
button.addEventListener('click', function(){
  let area = document.getElementById('note-text')
  let text = area.value
  let note = new Note(text)
  area.value = ''
  notes.push(note)
  displayNotes()
})

// in javascript, when i want to research something on google, i should type mdn after whatever i type

// this function displays the notes on the web page
function displayNotes() {
  let noteDiv = document.getElementById('notes')
  noteDiv.innerHTML = ''
  notes.forEach(function(note) {
    noteDiv.appendChild(note.elementForDisplay())
  });
}

// function createElementFromText(text) {
//   let textElement = document.createElement('p')
//   textElement.textContent = text
//   return textElement
// }
