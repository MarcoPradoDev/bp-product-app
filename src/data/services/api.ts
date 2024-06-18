import { ApiResponse, IBaseResponse } from "../entities/DefaultRes";

const BASE_URL = 'https://6468-2800-200-e630-15cc-9988-ac04-8c1a-b679.ngrok-free.app';

export default {
  get: async ({ url, controller }: { url: string, controller?: AbortController }): Promise<ApiResponse> => {
    try {
      const getUrl = BASE_URL + url;
      const response = await fetch(getUrl, { signal: controller?.signal });
      const data = await response.json();
      return { status: response.status, data };
    } catch (e: any) {
      if (e.name === 'AbortError') {
        return { status: 500, data: null, isAborted: true }
      } else {
        return { status: 500, data: null, isAborted: false }
      }
    }
  },
  post: async ({ url, body }: { url: string, body: any }): Promise<ApiResponse> => {
    try {
      const postUrl = BASE_URL + url;
      const response = await fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return { status: response.status, data };
    } catch {
      return { status: 500, data: null }
    }
  },
  delete: async ({ url, body }: { url: string, body?: any }): Promise<ApiResponse> => {
    try {
      const deleteUrl = BASE_URL + url;
      const response = await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return { status: response.status, data };
    } catch {
      return { status: 500, data: null }
    }
  },
  put: async ({ url, body }: { url: string, body: any }): Promise<ApiResponse> => {
    try {
      const putUrl = BASE_URL + url;
      const response = await fetch(putUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      return { status: response.status, data };
    } catch {
      return { status: 500, data: null }
    }
  }
}