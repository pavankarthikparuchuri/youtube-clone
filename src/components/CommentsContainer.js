const commentsData = [
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "PARUCHURI PAVANKARTHIK",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "PARUCHURI PAVANKARTHIK",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "PARUCHURI PAVANKARTHIK",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "PARUCHURI PAVANKARTHIK",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "PARUCHURI PAVANKARTHIK",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                      {
                        name: "PARUCHURI PAVANKARTHIK",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
              {
                name: "PARUCHURI PAVANKARTHIK",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "PARUCHURI PAVANKARTHIK",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div>
      <div className="flex gap-2 shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className="w-12 h-12"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-logo"
        />
        <div className="flex flex-col px-3">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
      {replies.map((item) => (
        <div className="pl-5 border-l-2 ml-5">
          <Comment data={item} />
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold pb-2">Comments: </h1>
      {commentsData.map((item, index) => (
        <Comment key={index} data={item} />
      ))}
    </div>
  );
};

export default CommentsContainer;
