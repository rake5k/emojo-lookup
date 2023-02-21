const search = () => {
  const input = document.getElementById('search');
  const filter = input.value.toUpperCase();
  const elements = document.getElementsByClassName('searchable');

  Array.prototype.forEach.call(elements, (el) => {
    const txtValue = el.textContent || el.innerText;
    if (txtValue.toUpperCase().includes(filter)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
}

module.exports.default = search;
