export class http {
  private static async fetcher<T>(
    url: string,
    method: string,
    requestInit: RequestInit | undefined
  ): Promise<T> {
    return await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method,
      ...requestInit,
    })
      .then((res) => res.json())
      .then((data: T) => data);
  }

  static get<T>(url: string, requestInit: RequestInit | undefined): Promise<T> {
    return http.fetcher<T>(url, 'GET', requestInit);
  }

  static post<T>(url: string, requestInit: RequestInit | undefined): Promise<T> {
    return http.fetcher<T>(url, 'POST', requestInit);
  }

  static put<T>(url: string, requestInit: RequestInit | undefined): Promise<T> {
    return http.fetcher<T>(url, 'PUT', requestInit);
  }

  static patch<T>(url: string, requestInit: RequestInit | undefined): Promise<T> {
    return http.fetcher<T>(url, 'PATCH', requestInit);
  }

  static delete<T>(url: string, requestInit: RequestInit | undefined): Promise<T> {
    return http.fetcher<T>(url, 'DELETE', requestInit);
  }
}
