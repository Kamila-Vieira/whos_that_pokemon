const helpers = {
  generateRandomNumber: (max: number) => Math.floor(Math.random() * max + 1),
  getNumber: (field: string) => Number(field.replace(/[^\d.,]+/, "")),
  verifications: function (raffled: string, selected: string, isString: boolean) {
    if (isString) {
      return raffled === selected ? "Certo" : "Errado";
    }
    const raffledHeightNumber = this.getNumber(raffled);
    const selectedHeightNumber = this.getNumber(selected);
    if (raffled === selected) return "Certo";
    if (raffledHeightNumber > selectedHeightNumber) return "Maior";
    if (raffledHeightNumber < selectedHeightNumber) return "Menor";
  },
};

export default helpers;
