import { useQuery } from '@tanstack/react-query'

import { MeetService } from '@/services/meets.service'

export function usePartner() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['meet'],
    queryFn: () => MeetService.getMeet()
  })

  return { data, isLoading, isSuccess }
}
