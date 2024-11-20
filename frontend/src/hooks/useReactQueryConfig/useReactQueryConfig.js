import { QueryClient } from 'react-query';

export const useReactQueryConfig = (hasCustomRetry) => {
	const retryWithReactQuery = !!hasCustomRetry ? false : true;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: retryWithReactQuery,
			},
		},
	});

	return [queryClient];
};
