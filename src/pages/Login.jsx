// // Core
// import { useNavigate } from 'react-router-dom';

// export const Login = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async values => {
//     const res = await fakeAPI.login(values);
//     if (res.success) navigate('/profile', { replace: true });
//   };

//   return (
//     <div>
//       <h1>Login page</h1>
//       <LoginForm onSubmit={handleSubmit} />
//     </div>
//   );
// };

// -------Query string
// const App = () => {
//   const [user, setUser] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const username = searchParams.get('username');

//   useEffect(() => {
//     // Here we perform an asynchronous operation,
//     // e.g. HTTP request for user information
//     if (username === '') return;

//     async function fetchUser() {
//       const user = await FakeAPI.getUser(username);
//       setUser(user);
//     }

//     fetchUser();
//   }, [username]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//     form.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Search</button>
//       </form>
//       {user && <UserInfo user={user} />}
//     </>
//   );
// };

// ----------useLocation
// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Analytics from 'path/to/analytics-service';

// const App = () => {
//   const location = useLocation();

//   useEffect(() => {
//     Analytics.send(location);
//   }, [location]);

//   return <div>...</div>;
// };
