# Anonymous

## Project Title: E-Learning Website

## Description:
This is an online learning platform that offers access to online courses. Such a platform aims to aid any student to improve their knowledge and broaden their horizon with any speciality of interest.

## Motivation:
Our aim as a team is to boost our web development skills in order to increase our chances in finding internship/job opportunities. Moreover, providing ease of access to various courses for passionate students.

## Build Status:
The website is fully working but there is still some functionalties not finished or not fully working yet which are:
1) The quiz rendered for all the courses are the same .
2) Progress for individual,corporate trainees are not updated as they move on through course videos, hence certifcate they recieve on completing the course is not working .
3) We still need to make an equation for calculating instructor monthly income through counting courses he gave and number of enrolled trainees in his/her courses.
4) We still need to add option of a trainee to rate an instructor in the frontend.
5) We still need to make instructors, corporate trainees and individual trainees to follow up on unresolved problems.
6) We still need to adjust the salary of the instructor per month depending on the students enrolled.
7) We still need to adjust the progress of the Student's course depending on completing the course lessons.


## Code Style:

**JavaScript**
- Two spaces indentation.
- Single quotes are preferred over double. Reason: HTML uses double quotes.
- Write code in functional style with minimum side effects.
- Looping and control structures were used to aid in the understanding of the program's execution flow by those reading the code. 
- Simple statements including assignments were used to improve the flow of the code.
- Left-hand comparisons were used to place constants or expressions to the left in any comparison.
- Relationships were indicated with the association of keywords and function names with their arguments.
- Don't use function statements. Instead, create anonymous functions and assing them to vars for consistency with other vars.
```http
// No
function x(a, b) {return a * b;}

// Yes
var x = function(a, b) {return a * b;};
```
- Avoid global vars where you can. If you use them, specify it explicitly.
```http
window.globalVar = ...;
```
- Use one ```var``` per variable.
```
// Yes
var a = 5;
var b = 6;

// No
var a, b, c, d, $this;
```
- Event callback should name event data variable as 'e', not 'event' etc.

```
onChange = {(e) => setFirstname(e.target.value)}
```

- Use quotes in object keys.
```
// No
{a: 'testtest'}
// Yes
{'a': 'testtest'}

```
- Use '===' for comparing instead of '=='. JavaScript is weakly typed language, so 5 == '5'. This ambiguity could lead to hard-to-find bugs.

```
if (a === 5) {
  ...
}
if ($(this).val() === 'something') {
  ...
}
if (typeof a === 'undefined') {
  ...
}

// Exception: this compares both to 'null' and 'undefined'.
if (item == null) {

}
```
**CSS**

- Two spaces indentation.
- Use color names (e.g. white) instead of  lowercase hex colors (e.g. #fff).
- Use * {box-sizing: border-box;}.
- Use hyphens between class names, not camelCase or under_scores.
- Use only classes for styling most of the time (no #ids, elems etc).
- minimal use inline styling.
- Profile your selectors with webkit inspector.

```
.signUpCard {
  width: 450px;
  margin-left: 950px;
  color: black;


```
- Use this sequence of properties
```
.item {
  position: static;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: block;
  visibility: hidden;
  float: none;
  clear: none;
  overflow: hidden;
  clip: rect(0 0 0 0);

  box-sizing: content-box;
  width: auto;
  min-width: 0;
  max-width: 0;
  height: auto;
  min-height: 0;
  max-height: 0;
  margin: 0;
  padding: 0;

  table-layout: fixed;
  empty-cells: show;
  border-spacing: 0;
  border-collapse: collapse;
  list-style: none;

  font: 1em sans-serif;
  font-family: Arial, sans-serif;
  font-size: 1em;
  font-weight: normal;
  font-style: normal;
  font-variant: normal;

  content: "";
  cursor: default;
  text-align: left;
  vertical-align: top;
  line-height: 1;
  white-space: normal;
  text-decoration: none;
  text-indent: 1;
  text-transform: uppercase;
  letter-spacing: 1;
  word-spacing: normal;

  opacity: 1;
  color: #d00;
  text-shadow: 5px 5px 5px #d59;
  border: 1px solid #d00;
  border-radius: 15px;
  box-shadow: inset 1px 0 0 #fff;
  background: #fff url("../i/bg.png") no-repeat 0 0; }
```


## Screenshots:
This is the home page 
![Screenshot (319)](https://user-images.githubusercontent.com/68378475/210181329-bfe50ebe-595e-40c3-87c0-b8a0fc9401d6.png)
This is a Course preview page
![Screenshot (320)](https://user-images.githubusercontent.com/68378475/210181510-4b4cfce5-c43c-4718-ae79-2511e096f87a.png)


## Tech/Framework used:

### MERN Stack:
- MongoDB
- Express framework 
- ReactJS
- Node.js

**Client:**
- React 
- Axios
- MUI
- Mongoose
- React Stripe
- JSPDF
- Bootstrap

**Server:**
- Node
- Express
- MongoDB
- Bcrypt
- Cors
- JWT
- Nodemailer
- Stripe
- Validator

## Features:

### Instructor Features:
- Log in using username and password
- Log out
- Change his/her password
- Receive an email to change a forgotten password
- Select their country
- View all the titles of the courses available including the total hours of the course.
- View the price of each course.
- Filter the courses based on a subject or rating or price
- Search for any course based on course title or subject or instructor
- View a preview video of the course
- View all the titles of the courses given by him/her.
- Filter the courses given by him/her based on a subject or price
- Search for a course given by him/her based on course title or subject or instructor
- View the ratings and reviews on all his/her courses.
- Create a new course and fill in all its details inclding title, subtitles, price, total hours, discount, subject and short summary about the entire course.
- Upload a video link from YouTube under each subtitle and enter a short description of the video.
- Upload a video link from YouTube as a preview to the course.
- Create a multiple choice exam with 4 choices per question.
- Set the answers which are not visible for the trainee for multiple choice exercises.
- View his/her rating and reviews.
- Edit his/her mini biography or email
- Define a promotion for the course and for how long
- Report a problem with a course. The problem can be "technical", "financial" or "other"
- See all previously repoted problems and their statuses

### Individual Trainee Features:
- Log in using username and password
- Log out
- Change his/her password
- Receive an email to change a forgotten password
- Select their country
- View all the titles of the courses available including the total hours of the course.
- View the price of each course.
- Filter the courses based on a subject or rating or price.
- Search for any course based on course title or subject or instructor
- View a preview video of the course
- Enter their credit card details to pay for a course they want to register for and thenpaying for this course.
- Open all the items inside a course he/she is registered for including videos and excercises.
- Rate an instructor 
- Rate a course
- Solve a multiple choice exercise by choosing the correct answer in any registered course
- Submit the answers to the exercise after completing it
- View his/her grade from the exercise
- Watch a video from a course he/she is registered for
- Write notes while watching the video
- Download the notes as a PDF
- See a list of all the courses he/she is enrolled in on their profile
- Report a problem with a course. The problem can be "technical", "financial" or "other"
- See all previously repoted problems and their statuses

### Corporate Trainee Features:
- Log in using username and password
- Log out
- Change his/her password
- Receive an email to change a forgotten password
- Select their country
- View all the titles of the courses available including the total hours of the course.
- Filter the courses based on a subject or rating.
- Search for any course based on course title or subject or instructor
- View a preview video of the course
- Open all the items inside a course he/she is registered for including videos and excercises.
- Rate an instructor 
- Rate a course
- Solve a multiple choice exercise by choosing the correct answer
- Submit the answers to the exercise after completing it
- View his/her grade from the exercise
- Watch a video from a course he/she is registered for
- Write notes while watching the video
- Download the notes as a PDF
- See a list of all the courses he/she is enrolled in on their profile
- Report a problem with a course. The problem can be "technical", "financial" or "other"
- See all previously repoted problems and their statuses

### Guest Features:
- Sign up for an account as an individual trainee using a username, email, password, first name, last name and gender.
- View all the titles of the courses available including the total hours of the course.
- Filter the courses based on a subject or rating or price.
- View the price of each course.
- Search for any course based on course title or subject or instructor
- View a preview video of the course

### Admin Features:
- Mark reported problems as "resolved" or "pending"
- Set a promotion for specific courses or several courses
- View course requests from corporate trainees
- Add another administrator with a set username and password
- Add instructors and create their usernames and passwords
- Add corporate trainees and create their usernames and passwords
- Grant corporate trainees access to specific courses

## Code Examples:
This is a function for an instructor reporting a problem:

### Frontend:

    const InstructorReportedProblem = () => {

    import React from 'react';
    import axios from 'axios';
    import Button from '@mui/material/Button';
    const { useState } = require("react");
    import jwt_decode from "jwt-decode";
      
     const t = localStorage.getItem('token');
    const decodedToken = jwt_decode(t);
    const id = decodedToken.id;
    
    const [TypeOfProblem, setTypeOfProblem] = useState([]);
    const [Problem, setProblem] = useState([]);
    

    const reportAProblem = async() =>{
        const body = {TypeOfProblem, Problem};
        await axios.post(`http://localhost:4000/reportAProblem/${id}`, body)
        .then(
         (res) => { 
          console.log(res.data)
        }
        );
    }
    
  
            return(
  
            <label>If you have any problem, please report it in the section below</label>
            <div className="input-container">
            <div>
            <div>
            <label>Enter the type of problem below(financial, technical, other)</label>
            </div>
             <input 
                type="textarea"
                onChange= {(e) => setTypeOfProblem(e.target.value)}
                value = {TypeOfProblem}
              />
            </div>
            <div>
            <label>Enter the problem below</label>
            </div>
            <div>
            <input 
                type="textarea"
                style={{width: "370px", height:"200px"}}
                onChange= {(e) => setProblem(e.target.value)}
                value = {Problem}
              />
            </div>
            </div>
              
            <Button  type='submit'  variant="contained"
                onClick={() =>{
                    reportAProblem();
                    sendMessage();
                  }}
                margin="normal"
                padding="normal"
                >Submit</Button>
        )
    }
    
### Backend:

    const ReportedProblems = require("../models/ReportedProblems");
    const Instructor = require("../models/Instructor");
    const reportAProblem = async(req,res) => {
    const id = req.params.id;

    const TypeOfProblem = req.body.TypeOfProblem
    const Problem = req.body.Problem
   

    try{
        const prob = await ReportedProblems.create({TypeOfProblem, Problem});
        console.log(prob);
        const inst1 = await Instructor.findById(id).populate('ReportedProblems');
        inst1.ReportedProblems.push(prob);
        await Instructor.findByIdAndUpdate(id,{ReportedProblems : inst1.ReportedProblems},{new:true}).populate('ReportedProblems'); 
        console.log(prob._id);
        console.log(inst1);
        res.status(200).json({"ReportedProblems" : inst1.ReportedProblems});
    }
    
    catch(error){
        res.status(400).json({error: error.message})
    }

 }
 

 

 Running such function will get the following output:
 ![Screenshot (318)](https://user-images.githubusercontent.com/68378475/210174048-42d1b38d-5d8a-4dad-a905-4cd5cc5f6661.png)
 

## Installation:

### For installation, do the following:
1- Make sure you downloaded and installed VScode \
2- Make sure you downloaded and installed node.js \
3- Clone the repository from the master branch and save it in some folder (FolderX)\
4- Open the your terminal and type in the next commands


```bash
  cd <FolderX's path folder by folder until you get there>
  npm install //this installs missing dependencies
```
Go to 'Backend' Folder> create a new file call it '.env' and add the following code lines: 
```bash
PORT = <port number> 
MONGO_URL = "<your MongoDB collection's URL>"
SECRET = <your secret pass>
STRIPE_SECRET_KEY= "<Your Stripe Secret Key"
```


Now add another terminal to your VScode.\
In one terminal add the next commands: 

```bash
  cd backend
  nodemon app.js
```

In the other terminal add the next commands:

```bash
  cd frontend
  npm start
```
A webpage will be opened automatically in your default browser.\
Now Welcome to Anonymous Website!! 🤩

## API reference:
#### GET instructor's course's titles 

```http
  GET /viewcourses/:id
```

|Parameter   | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

#### GET: Instructor filtering his/her courses by subject

```http
  GET /filtercourse/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

#### GET: Instructor filtering his/her courses by price

```http
  GET /filtercoursebyprice/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### GET: Instructor searching for courses of another instructor by instructor's name

```http
  GET /searchcourseName/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### Get: Instructor searching for his/her courses by subject ot title

```http
  GET /searchcourseSubjectandTitle/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |



#### Get: Instructor viewing the ratings of all of his/her courses

```http
  GET /viewRatings/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### Get: Instructor viewing the reviews of his/her courses

```http
  GET /viewReviews/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### Get ratings of the instructor

```http
  GET /viewMyRatings/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### Get reviews of the instructor

```http
  GET /viewMyReviews/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

#### Get view net profit per month for instructor

```http
  GET /viewMySalary/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### POST: instructor creating a course
```http
  POST /createcourse/:id
```
  
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Hours` | `number` | **Required**. course hours|
| `Title` | `string` | **Required**. course title|
| `Major` | `string` | **Required**. course subject|
| `Discount` | `string` | **Required**. course discount|
| `Subtitles` | `array` | **Required**. course subtitles|
| `Price` | `number` | **Required**. course price|
| `ShortSummary` | `Array` | **Required**. course short summary|

#### POST: instructor editing his/her email
```http
  POST /editEmail/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Email` | `string` | **Required**. new email of instructor|


#### POST: instructor editing his/her biography
```http
  POST /editBiography/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Biography` | `string` | **Required**. new biography of instructor|


#### POST: instructor defining a new promotion for one of his/her course
```http
  POST /editDiscount/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Discount` | `string` | **Required**. new discount of course|


#### POST: instructor reporting a problem

```http
  POST /reportAProblem/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `TypeOfProblem` | `string` | **Required**. type of the reported problem whether fincancial or technical or other|
| `Problem` | `string` | **Required**. Problem|


#### POST: individual trainee reporting a problem

```http
  POST /reportITProblem/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. individual trainee's id |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `TypeOfProblem` | `string` | **Required**. type of the reported problem whether fincancial or technical or other|
| `Problem` | `string` | **Required**. Problem|

#### POST: corporate trainee reporting a problem

```http
  POST /reportCTProblem/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. corporate trainee's id |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `TypeOfProblem` | `string` | **Required**. type of the reported problem whether fincancial or technical or other|
| `Problem` | `string` | **Required**. Problem|

#### POST: corporate trainee requesting access to a specific course

```http
  POST /Requestaccess/:id/:id1
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. corporate trainee's id |
| `id1` | `string` | **Required**. course's id|


#### GET: admin viewing access requests 
```http
   GET /viewRequestedCourses/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Admin's id |


#### POST: Admin grant corporate trainee access to specific courses

```http
  POST /GiveAccess/:id
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Admin's id |


#### GET total enrolled students in all courses of the instructor

```http
  GET /viewTotalEnrolled/:id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### GET reported problems of the instructor

```http
  GET /viewReportedProblems/:id
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. instuctor's id |


#### GET reported problems of an individual trainee

```http
  GET /viewITReportedProblems/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. individual trainee's id |


#### GET reported problems of a corporate trainee

```http
  GET /viewCTReportedProblems/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. corporate trainee's id|


#### GET: admin viewing all reported problems

```http
  GET /viewAllReportedProblems
```

#### POST: admin resolving a problem

```http
  POST /resolveProblem
```

#### POST: admin pending a problem

```http
  POST /pendingProblem
```

#### POST: admin setting a promotion for several courses

```http
  POST /setPromotion
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Price` | `number` | **Required**. price of several courses|
| `Discount` | `number` | **Required**. promotion for courses|

#### POST: admin setting a promotion for a specific course

```http
  POST /setSpecificPromotion
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Title` | `string` | **Required**. Title of the course|
| `Price` | `number` | **Required**. price of the course|
| `Discount` | `number` | **Required**. promotion for the course|

#### GET the progress of an corporate trainee

```http
  GET /GetCorporateProgress/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. corporate trainee's id|


#### GET the progress of an individual trainee

```http
  GET /GetIndividualProgress/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. individual trainee's id|


## Tests: 
-We tested the website using different accounts with different roles to test all the features so everyone in the team verified the functionlities several times in order to check if the website is working well without any problems.

### Using Postman:

- This is to test for editing the email of an instructor: 
![Screenshot (325)](https://user-images.githubusercontent.com/68378475/210799213-1d9680be-b8d5-4f6c-86ad-eb055bb6753f.png)

- This is to test for an admin setting a promotion for a specific course and the price of such course will be changed depending on the promotion:
![Screenshot (326)](https://user-images.githubusercontent.com/68378475/210799605-b5d36b31-900e-466d-bc81-05c6a1db1d19.png)

- This is to test for an individual trainee viewing his reported problems:
![Screenshot (327)](https://user-images.githubusercontent.com/68378475/211072288-b41bfca5-149c-428c-98f4-3524697cab02.png)

- This is to test for an instructor viewing the titles of his/her courses:
![Screenshot (328)](https://user-images.githubusercontent.com/68378475/211072749-6b2a7b46-e6da-4328-849d-143c4b84d850.png)

- This is to test for an admin viewing the course access requests for corporate trainees:
![Screenshot (330)](https://user-images.githubusercontent.com/68378475/211073326-e15aa292-2f04-47a9-8655-c285c01dcc16.png)

- This is to test for an instructor reporting a problem:
![Screenshot (331)](https://user-images.githubusercontent.com/68378475/211074488-09c440f4-a9b6-49c4-b9b3-07d66a9f416a.png)

- This is to test for a corporate trainee reporting a problem:
![Screenshot (332)](https://user-images.githubusercontent.com/68378475/211074811-e8e2bd3d-ee46-4815-999a-ad6ef7886e46.png)

- This is to test for an individual trainee reporting a problem:
![Screenshot (333)](https://user-images.githubusercontent.com/68378475/211075231-9400a445-6dec-46c5-b29a-0f2c72fea629.png)

- This is to test for an corporate trainee viewing his/her reported problems:
![Screenshot (335)](https://user-images.githubusercontent.com/68378475/211075522-63fd5368-a814-44d8-af82-923f5ba1ddcf.png)

- This is to test for an instructor viewing his/her reported problems:
![Screenshot (336)](https://user-images.githubusercontent.com/68378475/211075920-9a63c5c5-812f-43b5-a801-00a8248fad93.png)

- This is to test for an instructor viewing his/her ratings:
![Screenshot (337)](https://user-images.githubusercontent.com/68378475/211077163-e1e72834-0075-4d17-8a12-1b53af14539d.png)

- This is to test for an instructor viewing his/her reviews:
![Screenshot (339)](https://user-images.githubusercontent.com/68378475/211077522-4f0952f4-3540-414d-87bb-198b6c60e630.png)

- This is to test for an instructor editing his/her biography:
![Screenshot (340)](https://user-images.githubusercontent.com/68378475/211078092-28f44fc0-d334-475c-8fd0-6d44081707db.png)

- This is to test for an admin setting a promotion for a several courses:
![Screenshot (342)](https://user-images.githubusercontent.com/68378475/211078623-a6653ccd-4711-43b8-bc0c-1c73aecac357.png)

- This is to test for an instructor filtering his/her courses by subject:
![Screenshot (343)](https://user-images.githubusercontent.com/68378475/211079061-75757d62-49c5-489d-a1da-6750d9f28dcc.png)

-This is to test for an instructor filtering his/her courses by price:
![Screenshot (344)](https://user-images.githubusercontent.com/68378475/211079259-ca43fc15-fd88-445c-82b1-fadecce9a442.png)

- This is to test for an instructor searching for courses teached by anothor instructor:
![Screenshot (345)](https://user-images.githubusercontent.com/68378475/211079801-1f2f14d2-21d0-40a6-8df5-e5c30c21acf3.png)

- This is to test for an instructor searching for his/her courses by Title:
![Screenshot (347)](https://user-images.githubusercontent.com/68378475/211080836-a280da67-d479-4a92-8e90-a09c7e0d6925.png)

- This is to test for an instructor viewing the ratings of his/her courses:
![Screenshot (348)](https://user-images.githubusercontent.com/68378475/211081182-5c94067e-720d-4d69-9356-28932258ceaa.png)

- This is to test for an instructor viewing the reviews of his/her courses:
![Screenshot (350)](https://user-images.githubusercontent.com/68378475/211082070-39ccb942-d953-48ce-b661-8bb136ac2e3f.png)
-this is to test Search for courses based on filter and title:
expected to have the course details object cause there exist course with CSEN Title in database
![image](https://user-images.githubusercontent.com/88779061/211084405-e58e22bf-9b91-4e10-afbc-e5f4aaab866c.png)
-this is to test Search for courses based on filter and title:
expected to nothing in object cause there no course exist with Q Title in database
![image](https://user-images.githubusercontent.com/88779061/211084754-8068048c-58f3-4211-a3b9-ee163d78497b.png)

-this is to test for an admin to login.
![image](https://user-images.githubusercontent.com/88779061/211087006-1fd12694-964e-4b3c-85cf-e3da6f6f25f0.png)

- this is to test for an instructor to login.
![image](https://user-images.githubusercontent.com/88779061/211087424-debccd81-b5db-4a7e-80d3-829b9685e60a.png)

- this is to test for instructor to signup.
![image](https://user-images.githubusercontent.com/88779061/211087730-72b9c220-e6f7-4e61-86e8-c8d441266401.png)

- this is to test for admin to signup
![image](https://user-images.githubusercontent.com/88779061/211087853-03750401-6022-4ad3-bd4e-e2e244a619dd.png)

- this is to get all refund requests.
![image](https://user-images.githubusercontent.com/88779061/211088427-8bf36ac5-3029-428c-bc87-fe287ffec699.png)

- this is to accept a refund request by admin.
![image](https://user-images.githubusercontent.com/88779061/211089089-569605ff-ae15-4afb-aaa3-c3d9b78b2ada.png)

- this is to reject a refund request by admin.
![image](https://user-images.githubusercontent.com/88779061/211089319-90633869-c9f5-45a1-8c00-e96b75c5a00f.png)

- this is to send email to an instructor in case he/she forgot his/her password.
![image](https://user-images.githubusercontent.com/88779061/211090075-cc92690f-b5d1-4c56-8754-a8fe01a69bd1.png)

- this is to test when a user enters a wrong email in case he/ she forgets his/her password.
![image](https://user-images.githubusercontent.com/88779061/211090251-c5ccd2fa-9c33-4267-9727-f86013848a56.png)

-this is to send a certificate to the user when he/she completes the course.
![image](https://user-images.githubusercontent.com/88779061/211090724-ef9f45b6-5502-446a-94eb-91eac7034c72.png)

-this is to test Search for courses based on filter:Title and k: CSEN
expected the course CSEN all info as an object cause it exist in our database
![image](https://user-images.githubusercontent.com/88779061/211091748-2f69ea25-4e5f-4039-8060-de1631496ab1.png)
-this is to test Search for courses based on filter:Title and k: Q
expected to find nothing cause no course have letter Q in its title in the database
![image](https://user-images.githubusercontent.com/88779061/211091748-2f69ea25-4e5f-4039-8060-de1631496ab1.png)
-this is to test Currency change based on country selected by user which is EGP :
![image](https://user-images.githubusercontent.com/88779061/211093621-23c4bc75-9f94-4e6b-a135-f0fe3d1d348c.png)
-this is to test Currency change based on country selected by user which is EGP :
![image](https://user-images.githubusercontent.com/88779061/211093711-36efa0d1-c114-4649-9819-51472f7d32f3.png)
-this is to test individual trainne requestinng a refund for one of his courses  :
where myid is an object id of indivdual trainee in database and is an object id of course in our database which the previously addressed 
individual trainee is currently enrolled in after running this request this course will no longer be available for accesss to this trainee and this trainee wallet will be deposited by the amount of course price
![image](https://user-images.githubusercontent.com/88779061/211097579-3251342c-cd86-4e13-95c0-fd64f6cf097c.png)
-this is test the same individual trainee rereqestting for more time to refund his course :
![image](https://user-images.githubusercontent.com/88779061/211101422-e2ace793-b8f6-4eab-9ba8-12bcd21b394b.png)
-this is test instructor adding quiz
![image](https://user-images.githubusercontent.com/88779061/211102672-5d37726b-70da-4a36-98df-5cd82a05cecf.png)
-this is to test method which get for individual trainee he/she is enrolled in :
![image](https://user-images.githubusercontent.com/88779061/211103211-5bc8f00b-b9ca-49e3-b65f-f42345f12113.png)
-this is to test method which get for individual trainee he/she is enrolled in but he has no courses
![image](https://user-images.githubusercontent.com/88779061/211103503-fc6685ad-b329-4034-b7ac-abde4dae3537.png)
-this is to test method which get for Corporate trainee he/she is enrolled in :
![image](https://user-images.githubusercontent.com/88779061/211103655-1c50129b-55d1-4b3b-9b2c-8ac3c153713d.png)
-this is to test method which get for Corporate trainee he/she is enrolled in but he has no courses
![image](https://user-images.githubusercontent.com/88779061/211103751-a5de250f-b69a-4be5-9a8d-7e88fca6f517.png)
-this is to test instructor changing his/her password:
![image](https://user-images.githubusercontent.com/88779061/211104342-b2aca0a4-1377-4a1b-9f22-4d6193718e98.png)
-this is to test instructor changing his/her password but enters his current password incorrectly:
![image](https://user-images.githubusercontent.com/88779061/211104405-fbc5a5b0-e524-437c-b555-5578778936cd.png)
-this is to test instructor changing his/her password but email is incorrect:
![image](https://user-images.githubusercontent.com/88779061/211104467-79707453-8d96-4b82-94f2-537667ef1b54.png)
-this is to test individual corporate trainee rating course:
![image](https://user-images.githubusercontent.com/88779061/211105388-9ab9720f-9c8b-4ea7-8760-85465e71e80f.png)
-this is to test rating but without entring the rating:
![image](https://user-images.githubusercontent.com/88779061/211105479-d2c121f6-9059-493f-93f4-e820f26ea401.png)








## How to use: 
1) You will view the website as a guest at first and you can sign up for the full access.  
2) Log in and you will have the home page where you can see search bar in top right corner to search any course and you can also filter.
3) Depends how you signed up as an individual trainee , corporate_trainee , instructor or Admin you can access what you need in the navigation bar at the top.
4) You will have everything clear for what you want to do as everything is labelled well.

## Contribute:
[Contributor Covenant](contributing.md)

## Credits:
I would like to thank my Team for the effort done and our Project Manager Noha Abdellatif for the support :)
 ### The Team : 
 - Mazen Fayad : https://github.com/MazenFayad
 - Hossam Sanad : https://github.com/HossamSanad
 - Omar Warda : https://github.com/OmarWarda
 - Mazen Alaa : https://github.com/Mazen2001-del
 - Eslam Hany
 ### Source I learned from : 
[Tutorials](https://youtu.be/98BzS5Oz5E4) 





## License: 
 - [MIT License](LICENSE)
 - Stripe License : [Apache License](License)
  
  
  
