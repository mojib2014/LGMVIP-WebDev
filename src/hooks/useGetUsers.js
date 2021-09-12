import { useState } from "react";
import axios from "axios";

const apiUrl = "https://reqres.in/api/users?page=";

export default function useGetUsers() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(apiUrl + pageNumber);

      setPageNumber((prev) => prev + 1);
      if (pageNumber > data.total_pages) setPageNumber(1);

      setUsers(data);

      if (data.data) setLoading(false);
    } catch (err) {
      console.log("error: ", err);
      setError(err);
    }
  };

  return { users, error, loading, getUsers };
}
