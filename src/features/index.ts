import { machineTypeDefs } from '@/features/machine/machineScheme';
import { machineResolvers } from '@/features/machine/machineResolver';

export const typeDefs = [machineTypeDefs];

export const resolvers = {
  Query: {
    ...machineResolvers.Query,
  },
};
