import axios from 'axios'
export const fetchUsers = async ()=>{
    const res= await axios.get("/api/users");
    return res.data;
}

export const deleteUserApi = async (id: number) => {
  const res = await fetch("/api/users", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  return res.json();
};