function startLesson(lesson) {
  let lessonText = "";

  if (lesson === 1) {
    lessonText = "Lesson one: Greetings. Common greetings are: Hello, Hi, Good morning, and Good evening. Now you try saying: Hello, how are you?";
  }

  if (lesson === 2) {
    lessonText = "Lesson two: Self introduction. You can say: My name is John. I am from India. I am learning English. Now you try introducing yourself.";
  }

  if (lesson === 3) {
    lessonText = "Lesson three: Daily conversation. Example: What are you doing today? I am going to work. Now you try answering.";
  }

  if (lesson === 4) {
    lessonText = "Lesson four: Grammar tip. Say: I am going, not I going. Always use am, is, or are. Now you try saying: I am learning English.";
  }

  addMessage(lessonText, 'bot');
  speak(lessonText);
}
