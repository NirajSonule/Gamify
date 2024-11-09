import { useAuth } from "../contexts/AuthContext";
import loader from "../assets/icons/loader.svg"; // Path to your SVG
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserIcon } from "@heroicons/react/24/solid";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8 w-6/12">
      <h1 className="text-3xl font-extrabold text-white mb-6">User Profile</h1>

      {/* User Profile Card */}
      <Card className="bg-gray-900 text-white rounded-xl shadow-lg p-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <UserIcon className="h-10 w-10 text-amber-500" />
            <span className="text-2xl font-semibold">Profile Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Loading State */}
          {!user ? (
            <div className="flex justify-center items-center space-x-2">
              <img
                src={loader}
                alt="Loading..."
                className="w-12 h-12 animate-spin"
              />
              <span>Loading user information...</span>
            </div>
          ) : (
            <div>
              {/* Display user profile data here */}
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
