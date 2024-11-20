import { useMutation, useQuery } from 'react-query';
import { Delete, Get, Patch, Post, Put } from '../../../../services';

/*------------------ GET API CALL USING React Query -----------------------*/

export const useGetTodoList = () => {
	const response = useQuery({
		queryKey: ['todo-list'],
		queryFn: async () => await Get('https://jsonplaceholder.typicode.com/todos'),
	});
	return response;
};

/*------------------ DEPENDENT GET API CALL USING React Query -----------------------*/

export const useGetTodoListById = (id) => {
	const response = useQuery({
		queryKey: ['todo-list-by-id', id],
		queryFn: async () => await Get(`https://jsonplaceholder.typicode.com/todos/${id}`),
		enabled: !!id,
	});
	return response;
};

/*------------------ POST API CALL USING React Query -----------------------*/

export const useAddPost = () => {
	const response = useMutation({
		mutationKey: ['add-data'],
		mutationFn: (data) => Post('https://jsonplaceholder.typicode.com/posts', data),
	});
	return response;
};

/*------------------ PUT API CALL USING React Query -----------------------*/

export const useUpdatePost = (id) => {
	const response = useMutation({
		mutationKey: ['update-data'],
		mutationFn: (data) => Put(`https://jsonplaceholder.typicode.com/posts/1`, data),
	});
	return response;
};

/*------------------ PATCH API CALL USING React Query -----------------------*/

export const useModifyPost = (id) => {
	const response = useMutation({
		mutationKey: ['update-data'],
		mutationFn: (data) => Patch(`https://jsonplaceholder.typicode.com/posts/1`, data),
	});
	return response;
};

/*------------------ DELETE API CALL USING React Query -----------------------*/
export const useDeletePost = () => {
	const response = useMutation({
		mutationKey: ['delete-data'],
		mutationFn: (id) => Delete(`https://jsonplaceholder.typicode.com/posts/${id}`),
	});
	return response;
};
