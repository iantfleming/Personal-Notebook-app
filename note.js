// this class is used to store the note text

class Note {
  constructor(text) {
    this.text = text
  }

  elementForDisplay() {
    let textElement = document.createElement('p')
    textElement.textContent = this.text.substring(0, 20)
    return textElement
  }
}
