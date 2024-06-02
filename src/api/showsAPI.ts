import { IActor, IEpisode, IShow } from '@/interfaces';
import request from '@/utils/request';

export const fetchShows = async (page = 0): Promise<IShow[]> => {
  const response = await request.get<IShow[]>(`/shows?page=${page}`);
  return response.data;
};
export const fetchShowById = async (id: number): Promise<IShow> => {
  const response = await request.get<IShow>(`/shows/${id}`);
  return response.data;
};

export const fetchShowsEpisodesById = async (id: number): Promise<IEpisode[]> => {
  const response = await request.get<IEpisode[]>(`/shows/${id}/episodes`);
  return response.data;
};
export const fetchShowsCastById = async (id: number): Promise<IActor[]> => {
  const response = await request.get<IActor[]>(`/shows/${id}/cast`);
  return response.data;
};
