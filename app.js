document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    const wordCountButton = document.getElementById('wordCount');
    const charCountButton = document.getElementById('charCount');
    const clearButton = document.getElementById('clear');
    const fontSizeButton = document.getElementById('fontSize');
    const statusDiv = document.getElementById('status');

    function updateStatus() {
        const text = editor.value;
        const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
        const charCount = text.length;
        statusDiv.textContent = `Word Count: ${wordCount} | Character Count: ${charCount}`;
    }

    saveButton.addEventListener('click', () => {
        localStorage.setItem('notepadContent', editor.value);
        alert('Content saved');
    });

    loadButton.addEventListener('click', () => {
        const savedContent = localStorage.getItem('notepadContent');
        if (savedContent) {
            editor.value = savedContent;
            updateStatus();
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

    clearButton.addEventListener('click', () => {
        editor.value = '';
        updateStatus();
    });

    fontSizeButton.addEventListener('click', () => {
        const currentSize = window.getComputedStyle(editor).fontSize;
        const newSize = prompt('Enter new font size (e.g., 16px):', currentSize);
        if (newSize) {
            editor.style.fontSize = newSize;
        }
    });

    editor.addEventListener('input', updateStatus);
});
