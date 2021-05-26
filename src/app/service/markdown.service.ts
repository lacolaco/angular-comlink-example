import { Injectable } from '@angular/core';
import { wrap } from 'comlink';

async function compileMarkdown(source: string): Promise<string> {
  if (window.Worker) {
    const worker = wrap<typeof import('../worker/markdown.worker').api>(
      new Worker(new URL('../worker/markdown.worker', import.meta.url))
    );
    return await worker.compileMarkdown(source);
  } else {
    // Fallback to main thread with dynamic imports
    const worker = await import('../worker/markdown.worker').then((m) => m.api);
    return await worker.compileMarkdown(source);
  }
}

@Injectable({
  providedIn: 'root',
})
export class MarkdownService {
  async compile(source: string): Promise<string> {
    return await compileMarkdown(source);
  }
}
