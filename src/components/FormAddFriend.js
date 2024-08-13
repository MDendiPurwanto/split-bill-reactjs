import { useState } from "react"

export default function FormAddFriend({onAddFriend}){
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/150")

    function handleSumbit(e){
        e.preventDefault();

        if(!name || !image) return;

        const id = crypto.randomUUID();

        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance : 0
        }

        onAddFriend(newFriend);
        setName("")
        setImage("")
    }

    return(
        <form action="" className="form-add-friend" onSubmit={handleSumbit}>
            <label htmlFor="">🙎🏼Nama</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="">📸URL Gambar</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

            <button className="button">Tambah</button>
        </form>
    )
}