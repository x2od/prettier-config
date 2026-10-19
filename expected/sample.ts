interface Account<T extends object = {}> { id: string; balance: number; meta?: T }
export async function fetchAccount<T extends object>(id: string, options?: { retries: number; timeoutMs: number }): Promise<Account<T> | undefined> { return undefined }
enum Status { Active = "active", Closed = "closed" }
