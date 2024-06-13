import { IMeets, IUser, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'
import { IUserForm } from '@/types/form.types'

export interface IProfileResponse {
	meet: IMeets
	users: {
		email: string
        name: string
	}[]
}

class MeetsService {
	private BASE_URL = '/meets'

	async getMeet() {
		const response = await axiosWithAuth.get('/meets/partner')
		return response.data
	}

    async updateStatus(id: string, status: string) {
        try {
            const response = await axiosWithAuth.put(`/meets/${id}`, { status });
            return response.data;
        } catch (error) {
            throw new Error(`Не удалось обновить статус встречи`);
        }
    }
	
	  async deleteUser(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response.data
	}
	
} 

export const MeetService = new MeetsService()
