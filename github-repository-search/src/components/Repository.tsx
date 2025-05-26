export function Repository({repo}){
    return (<div className="border-solid p-4 m-2 bg-red-100" key={repo.id}>
        <a className="font-bold text-blue-400" href={repo.html_url}>{repo.full_name}</a>
        <h2>{repo.description}</h2>
        <div className="text-gray-500">{repo.stargazers_count} stars</div>
    </div>)
}