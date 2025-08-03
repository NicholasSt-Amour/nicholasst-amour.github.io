// Format: July 13, 2025, 15:58
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const updated = new Date(document.lastModified).toLocaleString(undefined, options);
document.getElementById('last-updated').textContent = `© 2025 Nicholas St-Amour. Last updated ${updated}.`;