'use client';
import { GitHubUser } from '@/types/github';

interface UserProfileProps {
    user: GitHubUser | null;
}

export default function UserProfile({ user }: UserProfileProps) {
    if (!user) return <p>User not found</p>;

    return (
        <>
            <p>
                <strong>GitHub user:</strong> {user.login}
            </p>
        </>
    );
}