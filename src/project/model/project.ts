export class Project {
  title: string;
  desc: string;
  github: string;
  npm: string;
  constructor({ name, description }: any) {
    this.title = `@angeeks/${name}`;
    this.desc = description;
    this.github = `https://github.com/angeeks/${name}`;
    this.npm = `https://www.npmjs.com/package/@angeeks/${name}/access`;
  }
}
