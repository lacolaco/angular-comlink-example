import { MarkdownService } from './service/markdown.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="compileMarkdown()">compile</button>

    <div>{{ result }}</div>
  `
})
export class AppComponent {
  result: string = '';

  constructor(private markdown: MarkdownService) {}

  async compileMarkdown() {
    this.result = await this.markdown.compile(`## Hello Comlink`);
  }
}
