import { useState } from 'react';
import { MeetService } from '@/services/meets.service';
export function useUpdateStatus() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateStatus = async (id: string, status:any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await MeetService.updateStatus(id, status);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError('Что-то пошло не так');
    }
  };

  return { updateStatus, loading, error };
}

