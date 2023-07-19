import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { IError } from "./types"
import { Posts } from "./api/Posts"
import { Post } from "./api/data-contracts"

const postClient = new Posts({baseURL: 'https://jsonplaceholder.typicode.com'})

export function usePost(postId: number) {
    return useQuery({
      queryKey: ['post', postId],
      queryFn: () => postClient.getPostById(postId),
      enabled: !!postId,
    })
}

export function usePosts() {
    return useQuery<Post[], IError>({
      queryKey: ['posts'],
      queryFn: async () => {
        const { data } = await postClient.getPosts()
        return data
      },
    })
  }