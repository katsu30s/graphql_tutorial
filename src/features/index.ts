import { machineTypeDefs } from '@/features/machine/machineScheme';
import { machineResolvers } from '@/features/machine/machineResolver';
import { pokemonTypeDefs } from '@/features/pokemon/pokemonScheme';
import { pokemonResolver } from '@/features/pokemon/pokemonResolver';

export const typeDefs = [machineTypeDefs, pokemonTypeDefs];

export const resolvers = {
  Query: {
    ...machineResolvers.Query,
    ...pokemonResolver.Query,
  },
};
