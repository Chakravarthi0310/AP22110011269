import UsersList from "./components/userLists";
import PostsList from "./components/postLists";

function App() {
  return (
    <div>
      <h1>API Data Display</h1>
      <UsersList />
      <PostsList type="latest" />
      <PostsList type="popular" />
    </div>
  );
}

export default App;
