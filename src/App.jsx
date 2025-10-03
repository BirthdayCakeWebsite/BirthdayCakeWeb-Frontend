import { useEffect } from 'react';
import { getClientId } from '@/utils/clientId';
import { createPreset, listPresets } from '@/api/presets';

export default function App() {
  useEffect(() => {
    const clientId = getClientId();

    // Tạo 1 preset mẫu rồi list
    createPreset({
      clientId,
      nameText: 'Khoa',
      ageNumber: 21,
      shape: 'round',
      sizeDiameter: 20,
      flavor: 'vanilla',
      toppings: [{ type: 'toy-bear', variant: 'pink' }],
      candlesCount: 6,
    })
      .then((r) => {
        console.log('Created preset id:', r.id);
        return listPresets(clientId);
      })
      .then((list) => console.log('Preset list:', list))
      .catch((e) => console.error(e));
  }, []);

  return <div style={{ padding: 16 }}>Birthday Cake FE — mở DevTools để xem log</div>;
}
