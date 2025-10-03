import { API_BASE_URL } from '@/config';

export async function createPreset(payload) {
  const res = await fetch(`${API_BASE_URL}/api/v1/presets`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Create failed: ${res.status}`);
  return res.json(); // { id: "..." }
}

export async function listPresets(clientId) {
  const res = await fetch(`${API_BASE_URL}/api/v1/presets?clientId=${encodeURIComponent(clientId)}`);
  if (!res.ok) throw new Error(`List failed: ${res.status}`);
  return res.json(); // []
}

export async function getPreset(id) {
  const res = await fetch(`${API_BASE_URL}/api/v1/presets/${id}`);
  if (!res.ok) throw new Error(`Get failed: ${res.status}`);
  return res.json(); // {}
}
