import { useDispatch } from "react-redux";
import { FiEdit2 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import Button from "components/button";

interface tProps {
  data: {
    Number: string | number;
    StudentName: string;
    Class: string;
    Result: string;
    Score: string;
    Grade: string;
  };
}

function ResultTableRow({ data }: tProps) {
  const dispatch = useDispatch();
  const [isHover, setHoverState] = useState(false);

  const handleDelete = (id: any) => {};

  function ShowIcons() {
    setHoverState(true);
  }

  function HideIcons() {
    setHoverState(false);
  }

  const { Number, StudentName, Class, Result, Score, Grade } = data;

  return (
    <>
      <tr onMouseOver={ShowIcons} onMouseOut={HideIcons}>
        <td aria-label="Number">{Number}</td>
        <td aria-label="StudentName">{StudentName}</td>
        <td aria-label="Class">{Class}</td>
        <td aria-label="Result">
          <Button text={Result} />
        </td>
        <td aria-label="Score">{Score}</td>
        <td aria-label="Grade">
          <span>{Grade}</span>{" "}
          {isHover && (
            <>
              <div>
                <FiEdit2 />
              </div>{" "}
              <div>
                <BsTrash />
              </div>
            </>
          )}
        </td>
      </tr>
    </>
  );
}
export default ResultTableRow;
