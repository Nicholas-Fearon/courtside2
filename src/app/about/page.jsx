export default function About() {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">About Courtside2</h1>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <strong>Courtside2</strong>, a follow-up to the original Courtside web app that I implemented during my Software Development Bootcamp. 
            The idea behind it is to bring fans closer to the players and teams they love. 
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Redoing this project helped me better understand key concepts such as dynamic routes, <code>{`{params}`}</code>, and PostgreSQL. 
            This new iteration of Courtside2 represents my growth and improved technical knowledge.
          </p>
          <p className="text-lg text-gray-700">
            Looking ahead, I plan to enhance Courtside2 with features such as integrating a live API to provide real-time updates and stats for players and teams, 
            making it even more engaging for basketball fans.
          </p>
        </div>
      </div>
    );
  }