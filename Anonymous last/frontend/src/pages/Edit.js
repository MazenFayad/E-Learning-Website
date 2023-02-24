import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { id } ='637f4bc36842923319c00e92' ;
    const [userId, setUserId] = useState('Hoss');
    const [title, setTitle] = useState('Sanad');
    const [body, setBody] = useState('Guc');
    const [waitingServer, setwaitingServer] = useState(false);
    const [isWaiting, setIsWaiting] = useState(true);
    //const navigator = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            fetch('/Instructor/637f4bc36842923319c00e92').then(response => {
                if (!response.ok) {
                    throw Error('Can not connect to server!')
                }
                return response.json();
            }).then(data => {
                console.log(data);
                setUserId(data._id);
                setTitle(data.Username);
                setBody(data.Password);
                setIsWaiting(false);
            }).catch(e => {
                console.log(e.message);

            })
        }, 2000);


    }, []);
    const mySubmit = (e) => {
        e.preventDefault();
        const mypost = { title, body, userId };
        console.log(mypost);
        setwaitingServer(true);
        setTimeout(() => {
            fetch('/Instructor/'+userId, {
                method: 'PUT',
                body: JSON.stringify(mypost),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json)).then(() => {
                    setwaitingServer(false);
                    //navigator('/posts')
                });
        }, 2000)


    }



    return (
        <div className="Container">
            {isWaiting && <h1>Please Wait Loading</h1>}
            {!isWaiting&&(<div>
            <form onSubmit={mySubmit}>
                <h1>Hello From Create</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput0" className="form-label">User Id</label>
                    <input type="text" className="form-control" id="exampleFormControlInput0" placeholder="name@example.com" required value={userId} onChange={(e) => { setUserId(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Body</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required value={body} onChange={(e) => { setBody(e.target.value) }} ></textarea>
                </div>
                <div class="col-auto">
                    {!waitingServer && <button type="submit" className="btn btn-success mb-3" >Create</button>}
                    {waitingServer && <button type="submit" className="btn btn-success mb-3" disabled >Please Wait</button>}
                </div>
            </form>

            <h3>{userId}</h3>
            <h3>{title}</h3>
            <h3>{body}</h3>


           </div> )}

        </div>



    );




}
export default Edit;