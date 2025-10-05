import { useEffect } from 'react';
import { getClientId } from '@/utils/clientId';
import { createPreset, listPresets } from '@/api/presets';

export default function App() {
  useEffect(() => {
    const clientId = getClientId();

    // Tạo 1 preset theo TEMPLATE (không còn shape/size)
    createPreset({
      clientId,
      templateId: 'R2', // ví dụ: R1/R2/R3/S1/S2/S3
      nameText: 'Khoa',
      ageNumber: 21,
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
