const timeline = [
  {
    id: "0",
    avatar:
      "https://avatars.githubusercontent.com/u/73788930?v=4",
    username: "jsSensei",
    message: `People call me the JavaScript Guru. I'm a JavaScript expert.`,
  },
  {
    id: "1",
    avatar:
      "https://avatars.githubusercontent.com/u/78100436?s=40&v=4",
    username: "horizon-code",
    message: "Wow, ziho está funcionando y vivo 🦉",
    name: "Ruben Pasamar Sanchez",
  },
  {
    id: "2",
    username: "devtester1",
    name: "PAPA FAM",
    avatar:
      "https://avatars.githubusercontent.com/u/77153872?s=60&v=4",
    message: `Welcome to PAPA FAM.`,
  },
  {
    id: "3",
    avatar:
      "https://avatars.githubusercontent.com/u/73788930?v=4",
    username: "jsSensei",
    message: `People call me the JavaScript Guru. I'm a JavaScript expert.`,
  },
  {
    id: "4",
    avatar:
      "https://avatars.githubusercontent.com/u/78100436?s=40&v=4",
    username: "horizon-code",
    message: "Wow, ziho está funcionando y vivo 🦉",
    name: "Ruben Pasamar Sanchez",
  },
  {
    id: "5",
    username: "devtester1",
    name: "PAPA FAM",
    avatar:
      "https://avatars.githubusercontent.com/u/77153872?s=60&v=4",
    message: `Welcome to PAPA FAM.`,
  },
  {
    id: "6",
    avatar:
      "https://avatars.githubusercontent.com/u/73788930?v=4",
    username: "jsSensei",
    message: `People call me the JavaScript Guru. I'm a JavaScript expert.`,
  },
  {
    id: "7",
    avatar:
      "https://avatars.githubusercontent.com/u/78100436?s=40&v=4",
    username: "horizon-code",
    message: "Wow, ziho está funcionando y vivo 🦉",
    name: "Ruben Pasamar Sanchez",
  },
  {
    id: "8",
    username: "devtester1",
    name: "PAPA FAM",
    avatar:
      "https://avatars.githubusercontent.com/u/77153872?s=60&v=4",
    message: `Welcome to PAPA FAM.`,
  },
  {
    id: "10",
    avatar:
      "https://avatars.githubusercontent.com/u/73788930?v=4",
    username: "jsSensei",
    message: `People call me the JavaScript Guru. I'm a JavaScript expert.`,
  },
  {
    id: "11",
    avatar:
      "https://avatars.githubusercontent.com/u/78100436?s=40&v=4",
    username: "horizon-code",
    message: "Wow, ziho está funcionando y vivo 🦉",
    name: "Ruben Pasamar Sanchez",
  },
  {
    id: "12",
    username: "devtester1",
    name: "PAPA FAM",
    avatar:
      "https://avatars.githubusercontent.com/u/77153872?s=60&v=4",
    message: `Welcome to PAPA FAM.`,
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(timeline))
}
