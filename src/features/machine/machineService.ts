import { type Machine } from '@/features/machine/machineType';
import { pokeAPIEndpoint } from '@/constants/url';

export const fetchMachine = async (id: number): Promise<Machine> => {
  const response = await fetch(`${pokeAPIEndpoint}/machine/${id}`);
  const data = await response.json();

  return {
    id: data.id,
    name: data.move.name,
  };
}