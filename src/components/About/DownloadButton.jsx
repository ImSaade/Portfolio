function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/curriculum-vitae.pdf"; // Ruta relativa desde la carpeta public
    link.download = "curriculum-vitae.pdf"; // Nombre del archivo descargado
    link.click(); // Simula el clic para descargar
  };

  return (
    <button
      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-lg shadow-lg border-2 border-transparent hover:bg-opacity-80 transform hover:-translate-y-0.5 transition-all duration-300"
      onClick={handleDownload}
    >
      <span>Descargar CV</span>
    </button>
  );
}

export default DownloadButton;
