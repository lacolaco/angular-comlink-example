import { Injectable } from '@angular/core';
import { proxy } from 'comlinkjs';

const MarkdownWorker = proxy<typeof import('../worker/markdown').Markdown>(
  new (Worker as any)('../worker/markdown', { type: 'module' })
);

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  async compile(source: string): Promise<string> {
    const worker = await new MarkdownWorker();
    return worker.compile(source);
  }
}
