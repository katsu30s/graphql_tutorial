import { fetchMachine } from '@/features/machine/machineService';

export const machineResolvers = {
  Query: {
    fetchMachine: async (_: any, { id }: { id: number }) => {
      return await fetchMachine(id);
    },
  },
}