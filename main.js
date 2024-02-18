const count = document.querySelector('.count');
const removeBtn = document.querySelector('.removeCount');
const resetBtn = document.querySelector('.resetCount');
const addBtn = document.querySelector('.addCount');

const addCount = () => count.textContent = String(Number(count.textContent) + 1);
const removeCount = () => count.textContent = String(Number(count.textContent) - 1);
const resetCount = () => count.textContent = String(Number(0));


removeBtn.addEventListener('click', () => removeCount());
addBtn.addEventListener('click', () => addCount());
resetBtn.addEventListener('click', () => resetCount());