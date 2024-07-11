const LogoGrid = () => {
  const logos = [
    { id: 1, name: "tata-logo.png", imageUrl: "/tata-logo.png" },
    { id: 2, name: "Adani-Logo-PNG-Cutout.png", imageUrl: "/tata-logo.png" },
    { id: 3, name: "UTL-Solar-Logo-PNG.png", imageUrl: "/UTL-Solar-Logo-PNG.png" },
    { id: 4, name: "vite.svg", imageUrl: "/vite.svg" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-center p-4 bg-white shadow-md rounded-md"
          >
            <img
              src={logo.imageUrl}
              alt={logo.name}
              className="max-h-12 max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
