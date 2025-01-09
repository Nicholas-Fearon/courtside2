export default function Contact() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            I’d love to hear from you! Whether it’s feedback, questions, or collaboration opportunities, feel free to reach out.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-800">View My Projects:</h2>
            <a
              href="https://github.com/Nicholas-Fearon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://github.com/Nicholas-Fearon
            </a>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Contact Me via Email:</h2>
            <a
              href="mailto:nejfearon@gmail.com"
              className="text-blue-600 hover:underline"
            >
              nejfearon@gmail.com
            </a>
          </div>
        </div>
      </div>
    );
  }