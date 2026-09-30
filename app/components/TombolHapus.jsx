import { hapusMenu } from "../actions";

export default function TombolHapus({ id }) {
  return (
    <form action={hapusMenu}>
      <input
        type="hidden"
        name="id"
        value={id}
      />

      <button
        type="submit"
        className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300"
      >
        Hapus
      </button>
    </form>
  );
}