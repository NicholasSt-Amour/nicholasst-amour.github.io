// Format: July 13, 2025
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const updated = new Date(document.lastModified).toLocaleDateString(undefined, options);
document.getElementById('last-updated').textContent = `© 2025 Nicholas St-Amour. Last updated ${updated}.`;