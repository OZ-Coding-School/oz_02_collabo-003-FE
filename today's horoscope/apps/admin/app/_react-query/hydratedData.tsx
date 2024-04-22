// import { dehydrate, Hydrate } from '@tanstack/react-query';
// import getQueryClient from './getQueryClient';

// export default async function HydratedPosts() {
//   const queryClient = getQueryClient();
//   await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: getPosts });
//   const dehydratedState = dehydrate(queryClient);

//   return <Hydrate state={dehydratedState}></Hydrate>;
// }
