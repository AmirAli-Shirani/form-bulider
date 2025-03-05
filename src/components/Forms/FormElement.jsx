import { useDrag } from "react-dnd";

const FormElement = ({ element }) => {
  const [, drag] = useDrag({
    type: "FORM_ELEMENT",
    item: element,
  });

  return (
    <div
      ref={drag}
      className="p-4 mb-2 bg-blue-500 text-white rounded cursor-pointer">
      {element.label}
    </div>
  );
};

export default FormElement;
