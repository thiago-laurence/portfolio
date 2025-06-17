export function getRepoPreviewImage(homepage: string | null, htmlUrl: string): string {
    if (homepage) {
        return `https://api.microlink.io?url=${encodeURIComponent(homepage)}&screenshot=true&embed=screenshot.url`;
    }
    
    const [owner, repo] = htmlUrl.split('/').slice(3, 5);
    return `https://opengraph.githubassets.com/317f0ed00d6d6d4a22f24b956b3988bc254e791fcfe1955acef5add1764cfb42/${owner}/${repo}`;
};