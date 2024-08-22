'use client';
import axiosInstance from '@/config/api/api.config';
import { useQuery } from '@tanstack/react-query';
import { QueriesOptions } from '@/common/constants/react-query';
import {FinancesDto} from "@/common/dto";

export const finances = 'finances';

interface FindAllDto {
  projectIds: string;
}

export const useFindAll = (params: FindAllDto) => {
  return useQuery<FinancesDto, Error>({
    queryKey: [`${finances}`, params],
    queryFn: () => axiosInstance.get(`/${finances}`, { params }),
    ...QueriesOptions,
  });
};

export const apiFinances = {
  useFindAll,
};
