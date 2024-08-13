import { useState } from "react"
import FormAddFriend from "./components/FormAddFriend"
import FormSplitBill from "./components/FormSpiltBill"
import FriendList from "./components/Friendlist"

const initialFriends = [
  {
    id:11823,
    name:"Dendi Purwanto",
    image:"https://i.pravatar.cc/150?img=33",
    balance:-7
  },
  {
    id:11824,
    name:"Dendi",
    image:"https://i.pravatar.cc/150?img=11",
    balance:20
  },
  {
    id:11825,
    name:"Dendi Pur",
    image:"https://i.pravatar.cc/150?img=12",
    balance:0
  },
  
]

export default function App(){
  const [friends, setFriends] = useState(initialFriends);
  const [showAddfriends, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend(){
    setShowAddFriend((showAddfriends)=> !showAddfriends);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend){
    setFriends((friends)=>[...friends, friend]);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSpiltBill (value) {
    setFriends(
      friends.map((friend) => {
        if(friend.id === selectedFriend?.id){
          return{
            ...friend,
            balance: friend.balance + value
          }
        }
        return friend;
    }))

    setSelectedFriend(null);
  }

  return(
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends}  onSelected={handleSelectedFriend}  selectedFriend={selectedFriend}/>
        {showAddfriends && <FormAddFriend onAddFriend={handleAddFriend}/>}
        <button onClick={handleShowAddFriend} 
        className="button">{showAddfriends ? "Tutup":"Tambah Teman"}</button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSpiltBill}/>}
    </div>
  )
}