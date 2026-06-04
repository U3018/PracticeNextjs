function Table() {
  return (
    <div className="overflow-x-auto mb-10">
      <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <tbody>
          <tr className="bg-gray-50">
            <td className="border px-4 py-3">Row 1, Cell 1</td>
            <td className="border px-4 py-3">Row 1, Cell 2</td>
          </tr>
          <tr>
            <td className="border px-4 py-3">Row 2, Cell 1</td>
            <td className="border px-4 py-3">Row 2, Cell 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
