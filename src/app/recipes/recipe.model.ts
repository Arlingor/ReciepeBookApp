export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingridients: string;

  constructor(name: string, desc: string, imagePath: string, ingridients: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingridients = ingridients;
  }
}
