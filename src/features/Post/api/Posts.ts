/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Post } from './data-contracts';
import { HttpClient, RequestParams } from './http-client';

export class Posts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @name GetPosts
     * @request GET:/posts
     */
    getPosts = (params: RequestParams = {}) =>
        this.request<Post[], any>({
            path: `/posts`,
            method: 'GET',
            format: 'json',
            ...params,
        });
    /**
     * No description
     *
     * @name GetPostById
     * @request GET:/posts/{id}
     */
    getPostById = (id: number, params: RequestParams = {}) =>
        this.request<Post, any>({
            path: `/posts/${id}`,
            method: 'GET',
            format: 'json',
            ...params,
        });
}
