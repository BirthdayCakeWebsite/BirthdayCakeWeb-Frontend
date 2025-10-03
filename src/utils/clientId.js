export function getClientId() {
  let id = localStorage.getItem('clientId');
  if (!id) {
    id = (crypto && crypto.randomUUID) ? crypto.randomUUID() : Math.random().toString(36).slice(2);
    localStorage.setItem('clientId', id);
  }
  return id;
}
