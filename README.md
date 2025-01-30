- Requirement Clarification

  - Features
  - Tech Stack(There are ui and data layer, for styling we use tailwind and redux for state management)
  - router-dom for routing
  - if there are more forms for form validation we use formik
  - which bundler (web pack)
  - for testing react testing library

- Project design
  - Header
    - logo
    - search
    - user icon
  - side panel
    - Home
    - shorts
    - subscription library
  - main body
    - button lists/ filters
    - videos (clicking a video should open a video page)

# Live Chat

- Challenges
  - Get Data Live
  - Update the UI
- For getting data live
  - we can use websockets, web sockets is a two way connection between server and client. we can quickly send data from either sides.(live chat, trading platforms use websockets)
  - we can also do api polling, here the client requests the server in regular intervals.(cricbuzz, gmail)
  - we will be using api polling as the order of comments doesnot matter and also it is fine to show messages in delay.
