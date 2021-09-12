import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import useGetUsers from "./hooks/useGetUsers";
import Errorboundary from "./components/Errorboundary";
import Loading from "./components/Loading/Loading";
import "./App.css";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const { users, error, loading, getUsers } = useGetUsers();

  return (
    <div className="App">
      <Errorboundary>
        <Navbar getUsers={getUsers} />
      </Errorboundary>
      <div className="main-content">
        <div className="content">
          {error && <p>{error.message}</p>}
          {loading ? (
            <Loading />
          ) : (
            <div className="cards">
              {users.data ? (
                users.data.map((user) => <Card key={user.id} user={user} />)
              ) : (
                <p>Please click Get Users button to load user data!</p>
              )}
            </div>
          )}
        </div>
        <Pagination getUsers={getUsers} />
      </div>
    </div>
  );
}

export default App;
