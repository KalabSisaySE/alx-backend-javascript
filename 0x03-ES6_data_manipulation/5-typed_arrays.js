export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  try {
    const view = new DataView(buffer);
    view.setInt8(position, value);
    return view;
  } catch (e) {
    throw new Error('Position outside range');
  }
}
