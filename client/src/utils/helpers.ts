const helpers = {
  generateRandomNumber: (max: number) => Math.floor(Math.random() * max + 1),
  getNumber: (field: string) => Number(field.replace(/[^\d.,]+/, "")),
  verifications: function (
    raffled: string,
    selected: string,
    isString: boolean
  ) {
    if (isString) {
      return raffled === selected ? "Right" : "Wrong";
    }
    const raffledHeightNumber = this.getNumber(raffled);
    const selectedHeightNumber = this.getNumber(selected);
    if (raffled === selected) return "Right";
    if (raffledHeightNumber > selectedHeightNumber) return "Higher";
    if (raffledHeightNumber < selectedHeightNumber) return "Lower";
  },
};

export default helpers;
