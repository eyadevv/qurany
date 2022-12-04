const Upload = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-b from-red-700 to-black text-white">
      <h1>Upload</h1>
      <audio controls>
        <source src="http://localhost:3000/api/stream" type="audio/mpeg" />
      </audio>
    </main>
  );
};
Upload.exclude = true;
export default Upload;
