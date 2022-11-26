export const productValidator = (
  title: string,
  price: number,
  category: string,
  quantity: number,
  description: string,
  artist: string
) => {
  const errors: { [name: string]: string } = {};
  if (!title) {
    errors.title = "Please fill out this field.";
  }
  if (!price) {
    errors.price = "Please fill out this field.";
  }
  if (!category) {
    errors.category = "Please fill out this field.";
  }
  if (!quantity) {
    errors.quantity = "Please fill out this field.";
  }
  if (!description) {
    errors.description = "Please fill out this field.";
  }
  if (!artist) {
    errors.artist = "Please choose artist.";
  }
  return errors;
};
