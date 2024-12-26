// Data for categories, vocabulary, and phrases
const categories = [
  { name: "Greetings", description: "Learn common English greetings." },
  { name: "Food & Drinks", description: "Vocabulary related to food and drinks." },
  { name: "Travel", description: "Useful words and phrases for traveling." },
  { name: "Daily Activities", description: "Phrases for daily life activities." }
];

const vocabulary = [
  { word: "Hello", meaning: "A greeting used when meeting someone." },
  { word: "Goodbye", meaning: "A farewell expression when leaving." },
  { word: "Coffee", meaning: "A drink made from roasted coffee beans." },
  { word: "Airport", meaning: "A place where airplanes take off and land." }
];

const phrases = [
  { phrase: "How are you?", meaning: "A common greeting to ask someone about their well-being." },
  { phrase: "I need help.", meaning: "Used to ask for assistance." },
  { phrase: "Where is the bathroom?", meaning: "A useful phrase when looking for a restroom." }
];

// Function to display categories
function displayCategories() {
  const categoryList = document.querySelector('.category-list');
  categories.forEach(category => {
    const categoryItem = document.createElement('div');
    categoryItem.className = 'category-item';
    categoryItem.innerHTML = `<strong>${category.name}</strong><p>${category.description}</p>`;
    categoryList.appendChild(categoryItem);
  });
}

// Function to display vocabulary
function displayVocabulary() {
  const vocabularyList = document.querySelector('.vocabulary-list');
  vocabulary.forEach(item => {
    const vocabItem = document.createElement('div');
    vocabItem.className = 'vocabulary-item';
    vocabItem.innerHTML = `<strong>${item.word}</strong><p>${item.meaning}</p>`;
    vocabularyList.appendChild(vocabItem);
  });
}

// Function to display phrases
function displayPhrases() {
  const phrasesList = document.querySelector('.phrases-list');
  phrases.forEach(phrase => {
    const phraseItem = document.createElement('div');
    phraseItem.className = 'phrase-item';
    phraseItem.innerHTML = `<strong>${phrase.phrase}</strong><p>${phrase.meaning}</p>`;
    phrasesList.appendChild(phraseItem);
  });
}

// Initial display of content
window.onload = function() {
  displayCategories();
  displayVocabulary();
  displayPhrases();
};
