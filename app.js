document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    const wordCountButton = document.getElementById('wordCount');
    const charCountButton = document.getElementById('charCount');

    saveButton.addEventListener('click', () => {
        localStorage.setItem('notepadContent', editor.value);
        alert('Content saved');
    });

    loadButton.addEventListener('click', () => {
        const savedContent = localStorage.getItem('notepadContent');
        if (savedContent) {
            editor.value = savedContent;
        } else {
            alert('No content found');
        }
    });

    wordCountButton.addEventListener('click', () => {
        const text = editor.value.trim();
        const wordCount = text.split(/\s+/).filter(Boolean).length;
        alert(`Word Count: ${wordCount}`);
    });

    charCountButton.addEventListener('click', () => {
        const text = editor.value;
        alert(`Character Count: ${text.length}`);
    });
});
