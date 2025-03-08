export const validateField = (field) => {
  if (!field.label) {
    alert("برچسب فیلد باید وارد شود!");
    return false;
  }

  if (field.type === "text") {
    if (field.minLength && field.label.length < field.minLength) {
      alert(`طول برچسب باید حداقل ${field.minLength} کاراکتر باشد.`);
      return false;
    }
    if (field.maxLength && field.label.length > field.maxLength) {
      alert(`طول برچسب نباید بیشتر از ${field.maxLength} کاراکتر باشد.`);
      return false;
    }
  }

  if (field.type === "range") {
    if (field.min && field.max && field.min > field.max) {
      alert("مقدار حداقل نباید بیشتر از حداکثر باشد.");
      return false;
    }
  }

  return true;
};
