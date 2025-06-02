import githubService from "@/lib/github";
import UserProfile from "@/components/core/user/UserProfile";

export default async function ProfilePage() {
    const user =  await githubService.getGitHubUser();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
            <p className="text-lg text-gray-700">This is the profile page content.</p>
            <UserProfile user={user} />
        </div>
    );
}