/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useAtom } from 'jotai';
import { GlobalLoadingAtom, ModalAtom } from '@/store';

// Generic types for request parameters and response
type UseApiDispatchOptions<TParams, TResponse> = {
  apiFunction: (params: TParams) => Promise<TResponse>;
};

export const useApiDispatch = <TParams, TResponse>({
  apiFunction,
}: UseApiDispatchOptions<TParams, TResponse>): {
  apiDispatch: (params: TParams) => Promise<TResponse | undefined>;
} => {
  const [, setGlobalLoading] = useAtom(GlobalLoadingAtom);
  const [, setModalAtomState] = useAtom(ModalAtom);

  const apiDispatch = async (params: TParams): Promise<TResponse | undefined> => {
    try {
      setGlobalLoading(true);

      const res = await apiFunction(params);

      setGlobalLoading(false);

      if ((res as any).object?.resultCode !== 0) {
        setModalAtomState((prev) => ({
          ...prev,
          isOpen: true,
          text:
            (res as any).object?.statusInf?.messageInfCheck?.messageInf?.messageStr ||
            'An error occurred',
        }));
      }

      return res;
    } catch (error) {
      setGlobalLoading(false);
      setModalAtomState((prev) => ({
        ...prev,
        isOpen: true,
        text: 'An error occurred',
        variant: 'error',
      }));
    }
  };

  return { apiDispatch };
};
