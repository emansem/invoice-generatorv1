import { TiDeleteOutline } from "react-icons/ti";
interface DeletePros {
  onDelete?: (e: React.MouseEvent<HTMLParagraphElement>) => void;
}
export default function DeleteButton({ onDelete }: DeletePros) {
  return (
    <span
      onClick={onDelete}
      className="opacity-0 hover:opacity-[1]  text-stone-400 cursor-pointer text-2xl "
    >
      <TiDeleteOutline />
    </span>
  );
}
