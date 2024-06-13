import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/user.service'

export function useMeets() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['meets'],
    queryFn: () => userService.getAllMeets()
  })

  return { data, isLoading, isSuccess }
}
