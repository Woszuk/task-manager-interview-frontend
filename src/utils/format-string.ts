export class FormatString {
  private word: string = "";

  capitalize(label: string) {
    this.word =
      label.charAt(0).toUpperCase() + label.slice(1).toLocaleLowerCase();
    return this;
  }

  removeUnderscore(label?: string) {
    this.word = (label ?? this.word).replace("_", " ");
    return this;
  }

  get getResult() {
    return this.word;
  }
}
