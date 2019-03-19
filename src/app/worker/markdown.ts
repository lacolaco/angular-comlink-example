import * as marked from 'marked';
import { expose } from 'comlink';

export class Markdown {
  compile(source: string) {
    return new Promise<string>((resolve, reject) => {
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

expose(Markdown, self);
