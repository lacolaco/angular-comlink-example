import { Injectable } from '@angular/core';
import { wrap } from 'comlink';

async function createMarkdownWorker() {
  const workerProxy = wrap<typeof import('../worker/markdown.worker').Markdown>(
    new Worker('../worker/markdown.worker', { type: 'module' }),
  );
  return await new workerProxy();
}

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  async compile(source: string): Promise<string> {
    const markdownWorker = await createMarkdownWorker();
    return markdownWorker.compile(source);
  }
}
