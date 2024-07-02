const Resume = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-end mb-5">
        <a
          className="btn font-bold bg-black text-white hover:bg-black hover:scale-105 transition-transform"
          href="/AshikurRahmanResume.pdf"
          download={"AshikurRahmanResume"}
        >
          Download Resume
        </a>
      </div>

      <iframe
        src="/AshikurRahmanResume.pdf"
        // style={{ width: "1300px", height: "1100px" }}
        className="w-full min-h-screen"
      />
    </div>
  );
};

export default Resume;
