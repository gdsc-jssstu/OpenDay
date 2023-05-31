import { useState } from "react";

const testing_data = [
  {
    name: "John Doe",
    id: 1,
    email: "johndoe@example.com",
    phone: "555-1234",
  },
  {
    name: "Jane Smith",
    id: 2,
    email: "janesmith@example.com",
    phone: "555-5678",
  },
  {
    name: "Michael Johnson",
    id: 3,
    email: "michaeljohnson@example.com",
    phone: "555-9012",
  },
  {
    name: "Emily Davis",
    id: 4,
    email: "emilydavis@example.com",
    phone: "555-3456",
  },
  {
    name: "Robert Wilson",
    id: 5,
    email: "robertwilson@example.com",
    phone: "555-7890",
  },
];

const LuckyDraw = () => {
  const [list, setList] = useState(null);

  const generateLuckyWinners = () => {
    // Generate n unique numbers
    var randomIndexes = [];
    var i = 0;
    while (i < 5) {
      var r = Math.floor(Math.random() * testing_data.length);
      if (randomIndexes.indexOf(r) === -1) {
        randomIndexes.push(r);
        i++;
      }
    }

    // Get users with index from randomIndexes
    var tempSelectedUsers = [];
    randomIndexes.forEach((randomIndex) => {
      tempSelectedUsers.push(testing_data[randomIndex]);
    });
    setList(tempSelectedUsers);
  };

  return (
    <div className="w-screen h-screen bg-yellow-200/60">
      <div className="flex flex-col items-center pt-12 gap-y-12">
        <h4 className=" font-bold text-4xl">Lucky Draw</h4>
        {!list && (
          <button
            onClick={generateLuckyWinners}
            className="transition-all  bg-blue-600 rounded-sm drop-shadow-md text-lg p-4 text-zinc-50"
          >
            Generate Lucky Winners
          </button>
        )}
        {list && <h4 className="text-5xl transition-all">CONGRATULATIONS!</h4>}
        {list && (
          <ol className="flex flex-wrap justify-center gap-12 transition-all px-4">
            {list.map((item) => (
              <li className="py-1  ">
                <p className="text-3xl font-semibold">{item.name}</p>
                <p className="text-lg">Ph: {item.phone}</p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default LuckyDraw;
