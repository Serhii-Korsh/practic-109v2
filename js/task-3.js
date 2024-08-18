/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Додай класу статичний метод Priority,
 *? який буде повертати об'єкт із пріоритетами.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
    };
  }

  constructor() {
    this.items = [];
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const removedNote = this.items.filter((item) => item.text !== text);
    this.items = removedNote;
  }

  updatePriority(text, newPriority) {
    this.items.find((item) => item.text === text).priority = newPriority;
  }
}

const note1 = new Notes();

note1.addNote({
  text: "abc",
  priority: Notes.Priority().LOW,
});

note1.addNote({
  text: "apple",
  priority: Notes.Priority().LOW,
});

note1.addNote({
  text: "book",
  priority: Notes.Priority().LOW,
});

note1.addNote({
  text: "car",
  priority: Notes.Priority().LOW,
});

note1.removeNote("abc");

note1.updatePriority("apple", Notes.Priority().HIGHT);

console.log(note1);
