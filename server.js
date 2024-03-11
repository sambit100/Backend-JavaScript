import express from 'express';

// port =8080
const app = express();

app.get("/",(req,res)=>{
    res.send('server is ready')
})

app.get("/api/jokes",(req,res)=>{
    
    const joke =[
        {
          "id": 1,
          "question": "Why was the math book sad?",
          "answer": "Because it had too many problems."
        },
        {
          "id": 2,
          "question": "What do you call fake spaghetti?",
          "answer": "An impasta."
        },
        {
          "id": 3,
          "question": "Why don't skeletons fight each other?",
          "answer": "They don't have the guts."
        },
        {
          "id": 4,
          "question": "Why couldn't the bicycle stand up by itself?",
          "answer": "It was two-tired."
        },
        {
          "id": 5,
          "question": "What do you call cheese that isn't yours?",
          "answer": "Nacho cheese."
        },
        {
          "id": 6,
          "question": "Why did the scarecrow win an award?",
          "answer": "Because he was outstanding in his field."
        },
        {
          "id": 7,
          "question": "Why did the tomato turn red?",
          "answer": "Because it saw the salad dressing."
        },
        {
          "id": 8,
          "question": "What do you call a bear with no teeth?",
          "answer": "A gummy bear."
        },
        {
          "id": 9,
          "question": "How do you organize a space party?",
          "answer": "You planet."
        },
        {
          "id": 10,
          "question": "Why did the golfer bring two pairs of pants?",
          "answer": "In case he got a hole in one."
        }
      ]

    res.send(joke);
})

app.listen(8080,()=>{
    console.log((`server started at 8080`))
})