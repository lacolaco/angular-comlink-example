import * as marked from 'marked';
import { expose } from 'comlink';

export const api = {
  compileMarkdown(source: string) {
    return new Promise<string>((resolve, reject) => {
      marked(source, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  },
};

expose(api);
