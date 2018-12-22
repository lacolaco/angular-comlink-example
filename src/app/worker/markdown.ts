import * as marked from 'marked';
import * as Comlink from 'comlinkjs';

export class Markdown {
  compile(source: string) {
    return new Promise((resolve, reject) => {
      marked(source, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  }
}

Comlink.proxy(self, Markdown);
