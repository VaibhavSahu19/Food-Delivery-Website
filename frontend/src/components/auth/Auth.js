import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="border-none rounded-3xl  bg-pink-tone text-base text-white font-medium py-1 px-3 sm:border sm:border-stone-400 sm:rounded shadow-md"
      onClick={() => loginWithRedirect()}
    >
      Login
    </button>
  );
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="border-none rounded-3xl  bg-pink-tone text-base text-white font-medium py-1 px-3 sm:border sm:border-stone-400 sm:rounded shadow-md"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Logout
    </button>
  );
};

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const username = user.name.split("@")[0];

  return <>{isAuthenticated && <h2>{username}</h2>}</>;
};
